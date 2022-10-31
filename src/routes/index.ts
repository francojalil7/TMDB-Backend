const express = require("express");
const router = express.Router();
import { authRouter } from "./auth";
import userRouter from "./userRouter";
import favsRouter from "./favs";
import searchRouter from "./search";
import seriesRouter from "./series";

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/favs", favsRouter);
router.use("/search", searchRouter);
router.use("/series", seriesRouter);

export default router;
