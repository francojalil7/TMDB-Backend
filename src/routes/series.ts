import { Router } from "express";
import {
  getPopularesCtrl,
  getSeriesCtrl,
  searchSeriesCtrl,
  topRatedCtrl,
} from "../controllers/series";
const router = Router();

router.get("/", getSeriesCtrl);
router.get("/popular", getPopularesCtrl);
router.get("topRated", topRatedCtrl);
router.get("/search/:searchValue", searchSeriesCtrl);

export default router;
