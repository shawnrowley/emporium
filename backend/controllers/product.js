import asyncHandler from "express-async-handler";
import Product from "../models/product.js";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error(`Product not found`);
  }
});

// @desc    Create Product
// @route   POST /api/product/login
// @access  Public
const createProduct = asyncHandler(async (req, res) => {
  const { name, image, price, category, brand, description, user } = req.body;
  const productExists = await Product.findOne({ name });

  if (productExists) {
    res.status(400);
    throw new Error("Product already exists");
  }

  const product = await Product.create({
    name,
    image,
    price,
    category,
    brand,
    description,
    user,
  });

  if (product) {
    res.status(201).json({
      _id: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
      category: product.category,
      brand: product.brand,
      description: product.description,
      user: product.user,
    });
  } else {
    res.status(401);
    throw new Error("Invalid product data");
  }
});

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Update Product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    product.category = req.body.category || product.category;
    product.brand = req.body.brand || product.brand;
    product.description = req.body.description || product.description;
    const updatedProduct = await product.save();
    res.json({
      _id: updatedProduct._id,
      name: updatedProduct.name,
      price: updatedProduct.price,
      category: updatedProduct.category,
      brand: updatedProduct.brand,
      description: updatedProduct.description,
    });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
