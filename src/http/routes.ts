import { Router } from "express";
import { registerUserController } from "./userController";

const router = Router();

router.post("/user", registerUserController);

export default router;