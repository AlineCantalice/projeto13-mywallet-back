import { Router } from "express";
import { signIn, signUp } from "../controllers/authController.js";
import validateUser from "../middlewares/userValidation.js";
import validateLogin from "../middlewares/loginValidation.js"

const router = Router();

router.post("/sign-up", validateUser, signUp);
router.post("/sign-in", validateLogin, signIn);

export default router;