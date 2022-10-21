import express from "express"
import UserModel from "../models/User";
const router = express.Router();

router.get("/", async (req,res)=>{
    const users = await UserModel.find({})
    console.log("🚀 ~ file: userRouter.ts ~ line 7 ~ router.get ~ users", typeof users[0]._id)
    res.send(users)
})

export default router;