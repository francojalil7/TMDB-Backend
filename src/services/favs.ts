import { fav } from "../interfaces/fav.interface";
import FavModel from "../models/Fav";

export const addFav = async (fav: fav) => {
  console.log("🚀 ~ file: favs.ts ~ line 5 ~ addFav ~ fav", fav);
  await FavModel.create({ fav });
};
