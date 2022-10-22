import { Request, Response } from "express";
import { request } from "http";
import { fav } from "../interfaces/fav.interface";
import FavModel from "../models/Fav";
import UserModel from "../models/User";
import { addFav, getFav } from "../services/favs";

export const getCtrl = async (req: Request, res: Response) => {
  const favs = await FavModel.find({ userId: req.body.userId });
  res.send(favs);
};

export const addCtrl = async ({ params, body }: Request, res: Response) => {
  const [user] = await UserModel.find({ id: body.userId });
  const { title, overview, poster, tmdbId } = body;
  const newFav: fav = {
    title,
    overview,
    poster,
    tmdbId,
    userId: user.id,
  };
  const favorite = await addFav(newFav);
  res.send(favorite);
};

export const removeCtrl = ({ body }: Request, res: Response, next) => {
  const { id } = body;
  FavModel.findByIdAndRemove(id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => next(error));
};
export default { addCtrl, removeCtrl, getCtrl };
