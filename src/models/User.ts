import mongoose from "mongoose";
import { user } from "../interfaces/user.interface";

const UserSchema = new mongoose.Schema<user>({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
  },
  password: {
    type: String,
    minlength: [7, "Minimun password length is 7 characters"],
  },
  salt: {
    type: String,
  },
});

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
