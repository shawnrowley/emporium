import express from "express";
import { authUser, registerUser, getUserProfile } from "../controllers/user.js";
import { authenticate } from "../middleware/auth.js";

const router = express.Router();
router.post("/login", authUser);
router.route("/").post(registerUser);
router.route("/profile").get(authenticate, getUserProfile);
//router.get("/profile", getUserProfile);

export default router;
