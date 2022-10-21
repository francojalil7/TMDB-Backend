import { Request, Response } from "express";
import { fav } from "../interfaces/fav.interface";
import UserModel from "../models/User";
import { addFav } from "../services/favs";

export const addFavCtrl = async ({ params, body }: Request, res: Response) => {
  const [user] = await UserModel.find({ id: body.userId });
  const { title, overview, poster, tmdbId } = body;
  console.log("🚀 ~ file: favs.ts ~ line 9 ~ addFavCtrl ~ body", body)
  const newFav: fav = {
    title,
    overview,
    poster,
    tmdbId,
    userId: user.id,
  };
  const favorite = await addFav(newFav);
  console.log("🚀 ~ file: favs.ts ~ line 17 ~ addFavCtrl ~ favorite", favorite)
  res.send(favorite);
};

export default { addFavCtrl };
