import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth";

const registerCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);
  console.log("🚀 ~ file: auth.ts ~ line 6 ~ registerCtrl ~ responseUser", responseUser)
  res.send(responseUser);
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  console.log("🚀 ~ file: auth.ts ~ line 12 ~ loginCtrl ~ body", body)
  const responseUser = await loginUser({ email, password });

  if (responseUser === "PASSWORD_INCORRECT") {
    res.status(403);
    res.send(responseUser);
  } else {
    res.send(responseUser);
  }
};

export { loginCtrl, registerCtrl };