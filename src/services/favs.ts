import { fav } from "../interfaces/fav.interface";
import FavModel from "../models/Fav";

export const addFav = async (fav: fav) => {
  const favorite = await FavModel.create(fav);
  return favorite;
};
