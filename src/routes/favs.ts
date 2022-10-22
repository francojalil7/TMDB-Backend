import express from "express";
import { getCtrl, addCtrl, removeCtrl } from "../controllers/favs";
import FavModel from "../models/Fav";
const router = express.Router();

router.get("/",getCtrl);
router.post("/", addCtrl);
router.delete("/", removeCtrl);

export default router;
