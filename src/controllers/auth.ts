import { Request, Response } from "express";
import { AuthRequest } from "../interfaces/user.interface";
import { registerNewUser, loginUser } from "../services/auth";

export const registerCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);
  res.send(responseUser);
};

export const loginCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });

  if (responseUser === "PASSWORD_INCORRECT") {
    res.status(403);
    res.send(responseUser);
  } else {
    res.cookie("token", responseUser);
    res.send(responseUser);
  }
};

export const logoutCtrl = async ({ body }: AuthRequest, res: Response) => {
  res.clearCookie("token");
  res.sendStatus(204);
};
export const meCtrl = (req:AuthRequest, res: Response) => {
  res.send(req.user);
};
export default { loginCtrl, registerCtrl, logoutCtrl };
