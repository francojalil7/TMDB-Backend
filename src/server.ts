import dotenv from "dotenv";
import express from "express";
import db from "./config/db"
import bodyParser from "body-parser";
import morgan from "morgan"
import routes from "./routes"
import cookieParser from "cookie-parser";
import cors from "cors"

const app: express.Application = express();
dotenv.config()
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors())
app.use('/api', routes)

app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.use((err:any, req:any, res:any, next:any):any=>{
  console.error;
  res.status(500).send(err)
})

db.sync({ force: false }).then(() => {
  console.log("DB CONECTADA");
  app.listen(0, () => console.log(`server listenning`));
});