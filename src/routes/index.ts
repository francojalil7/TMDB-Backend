const express = require("express");
const router = express.Router();
import { authRouter } from "./auth";
import userRouter from "./userRouter";
import favsRouter from "./favs";

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/favs", favsRouter);

export default router;
