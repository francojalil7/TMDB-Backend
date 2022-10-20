import { Request, Response, Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth";

const authRouter = Router();
authRouter.post("/register", registerCtrl);
authRouter.post("/login", loginCtrl);

export { authRouter };