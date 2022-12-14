import { validateToken } from "../config/tokens";
import { AuthRequest } from "../interfaces/user.interface";

export const validateAuth = (req:AuthRequest, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);

  const { user } = validateToken(token);
  if (!user) return res.sendStatus(401);
  req.user = user;
  next();
};

module.exports = { validateAuth };
