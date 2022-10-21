import mongoose from "mongoose";
import { fav } from "../interfaces/fav.interface";

const FavSchema = new mongoose.Schema<fav>({
  tmdbId: { type: String },
  title: { type: String },
  poster: { type: String },
  userId: { type: String },
  overview: { type: String },
});

const FavModel = mongoose.model("Fav", FavSchema);
export default FavModel;
