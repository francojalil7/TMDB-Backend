import dotenv from "dotenv";
import mongoose from "mongoose";
const contrasenia = process.env.PASSWORD
console.log("🚀 ~ file: db.ts ~ line 4 ~ contrasenia", contrasenia)
const client = mongoose.connect(process.env.PASSWORD)
.then(()=>console.log("ssuccesfully db connected"))
.catch(err => console.error(err))

export default client;