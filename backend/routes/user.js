import express from "express";
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/user.js";
import { authenticate, admin } from "../middleware/auth.js";

const router = express.Router();
router.post("/login", authUser);
router.route("/").post(registerUser).get(authenticate, admin, getUsers);
router
  .route("/profile")
  .get(authenticate, getUserProfile)
  .put(authenticate, updateUserProfile);
router
  .route("/:id")
  .delete(authenticate, admin, deleteUser)
  .get(authenticate, admin, getUserById)
  .put(authenticate, admin, updateUser);

export default router;
