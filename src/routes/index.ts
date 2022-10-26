const express = require("express");
const router = express.Router();
import { authRouter } from "./auth";
import userRouter from "./userRouter";
import favsRouter from "./favs";
import searchRouter from "./search";

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/favs", favsRouter);
router.use("/search", searchRouter);

export default router;
