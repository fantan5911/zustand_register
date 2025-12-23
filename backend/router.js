import { Router } from "express";
import AuthController from './User/AuthController.js';

const router = Router();

router.post("/users/register", AuthController.Register);
router.post("/users/login", AuthController.Login);

export default router;