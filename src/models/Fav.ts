import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { fav } from "../interfaces/fav.interface";

const FavSchema = new mongoose.Schema<fav>({
  title: {
    type: String,
  },
  poster: { type: String },
});

export default mongoose.model("Fav", FavSchema);
