import {  Router } from "express";
import { getSeriesCtrl, searchSeriesCtrl } from "../controllers/series";
const router = Router();

router.get("/", getSeriesCtrl);
router.get("/search/:searchValue", searchSeriesCtrl)

export default router;
