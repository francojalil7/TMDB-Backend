import express from "express";
import { addFavCtrl } from "../controllers/favs";
import { fav } from "../interfaces/fav.interface";
import UserModel from "../models/User";
import { addFav } from "../services/favs";
const router = express.Router();

router.post("/:id", addFavCtrl);

export default router;
