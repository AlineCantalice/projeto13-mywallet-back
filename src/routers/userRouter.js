import { Router } from "express";
import { signIn, signUp } from "../controllers/authController.js";
import validateUser from "../middlewares/userValidation.js";

const router = Router();

router.post("/sign-up", validateUser, signUp);
router.post("/sign-in", signIn);

export default router;