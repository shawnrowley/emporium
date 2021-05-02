import express from "express";
import {
  addOrderItems,
  getOrderByID,
  getUserOrders,
  updateOrderToPaid,
  getOrders,
  updateOrderToDelivered,
} from "../controllers/order.js";
import { authenticate, admin } from "../middleware/auth.js";

const router = express.Router();
router
  .route("/")
  .post(authenticate, addOrderItems)
  .get(authenticate, admin, getOrders);
router.route("/userorders").get(authenticate, getUserOrders);
router.route("/:id").get(authenticate, getOrderByID);
router.route("/:id/pay").put(authenticate, updateOrderToPaid);
router.route("/:id/deliver").put(authenticate, updateOrderToDelivered);

export default router;
