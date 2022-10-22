import { fav } from "../interfaces/fav.interface";
import FavModel from "../models/Fav";

export const getFav = async () => {
  const favs = await FavModel.find({});
  return favs;
};

export const addFav = async (fav: fav) => {
  const favorite = await FavModel.create(fav);
  return favorite;
};


