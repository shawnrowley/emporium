import express from "express";
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/user.js";
import { authenticate } from "../middleware/auth.js";

const router = express.Router();
router.post("/login", authUser);
router.route("/").post(registerUser);
router
  .route("/profile")
  .get(authenticate, getUserProfile)
  .put(authenticate, updateUserProfile);
//router.get("/profile", getUserProfile);

export default router;
