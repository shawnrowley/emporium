import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product.js";
import { authenticate, admin } from "../middleware/auth.js";

const router = express.Router();

router.route("/").get(getProducts).post(authenticate, admin, createProduct);
router
  .route("/:id")
  .get(getProductById)
  .delete(authenticate, admin, deleteProduct)
  .put(authenticate, admin, updateProduct);

export default router;
