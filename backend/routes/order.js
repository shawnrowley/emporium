import express from "express";
import {
  addOrderItems,
  getOrderByID,
  getUserOrders,
  updateOrderToPaid,
} from "../controllers/order.js";
import { authenticate } from "../middleware/auth.js";

const router = express.Router();
router.route("/").post(authenticate, addOrderItems);
router.route("/userorders").get(authenticate, getUserOrders);
router.route("/:id").get(authenticate, getOrderByID);
router.route("/:id/pay").put(authenticate, updateOrderToPaid);

export default router;
