import { Request, Response, Router } from "express";
import { validateToken } from "../config/tokens";
import { registerCtrl, loginCtrl, logoutCtrl } from "../controllers/auth";
import { AuthRequest } from "../interfaces/user.interface";
import { validateAuth } from "../middelware/auth";
const authRouter = Router();

authRouter.post("/register", registerCtrl);
authRouter.post("/login", loginCtrl);
authRouter.post("/logout", logoutCtrl);

//PERSISTENCIA
authRouter.get("/me", validateAuth, (req: AuthRequest, res, next) => {
  res.send(req.user);
});
export { authRouter };
