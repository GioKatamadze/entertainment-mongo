import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

router.post("/user/register", userController.registerUser);
router.post("/user/login", userController.loginUser);
router.route("/user/profile").get(userController.getUserProfile);

export default router;
