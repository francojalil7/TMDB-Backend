import express from "express";
import { fav } from "../interfaces/fav.interface";
import UserModel from "../models/User";
import { addFav } from "../services/favs";
const router = express.Router();

router.post("/:id", async ({ params, body }, res) => {
  const [user] = await UserModel.find({ id: body.userId });
  const { title, overview, poster, tmdbId } = body;

  const newFav: fav = {
    title,
    overview,
    poster,
    tmdbId,
    userId: user.id,
  };
  addFav(newFav);
  res.send(user);
});

export default router;
