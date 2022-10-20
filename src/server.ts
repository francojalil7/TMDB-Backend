import dotenv from "dotenv";
import express from "express";
import client from "./config/db";
import bodyParser from "body-parser";
import morgan from "morgan";
import routes from "./routes";
import cookieParser from "cookie-parser";

const app: express.Application = express();
dotenv.config();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", routes);

app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.use((err: any, req: any, res: any, next: any): any => {
  console.error;
  res.status(500).send(err);
});

app.listen(3001, () => console.log(`server listenning on port 3001`));
