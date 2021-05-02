import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  createSampleProduct,
  deleteProduct,
  updateProduct,
  updateSampleProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/product.js";
import { authenticate, admin } from "../middleware/auth.js";

const router = express.Router();

router
  .route("/")
  .get(getProducts)
  .post(authenticate, admin, createSampleProduct);
router.route("/top").get(getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(authenticate, admin, deleteProduct)
  .put(authenticate, admin, updateSampleProduct);
router.route("/:id/reviews").post(authenticate, createProductReview);

export default router;
