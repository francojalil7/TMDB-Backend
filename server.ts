require("dotenv").config();
import express from "express";
import db from "./config/db"
import bodyParser from "body-parser";
import morgan from "morgan"
import cookieParser from "cookie-parser"
import routes from "./routes"

const app: express.Application = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use('/api', routes)
app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.use((err, req, res, next)=>{
  console.error;
  res.status(500).send(_err)
})

db.sync({ force: false }).then(() => {
  console.log("DB CONECTADA");
  app.listen(3001, () => console.log(`server listenning on port 3001`));
});