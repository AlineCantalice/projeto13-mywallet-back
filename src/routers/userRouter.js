import { Router } from "express";
import { signUp } from "../controllers/authController.js";
import validateUser from "../middlewares/userValidation.js";

const router = Router();

router.post("/sign-up", validateUser, signUp);

export default router;