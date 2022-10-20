const express = require("express");
const router = express.Router();
import {authRouter} from "./auth"

router.use("/auth", authRouter)


export default router;
