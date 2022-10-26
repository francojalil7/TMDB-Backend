import dotenv from "dotenv";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import db from "./config/db";
import morgan from "morgan";
import routes from "./routes";
import cookieParser from "cookie-parser";
import cors from "cors"

const app: express.Application = express();
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials:true,
    methods:["GET", "POST", "PUT", "DELETE"],
    optionsSuccessStatus:200,
    allowedHeaders: [
      "Access-Control-Allow-Credentials",
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Methods",
      "Origin",
      "WithCredentials",
      "X-Requested-Wwith",
      "Content-Type",
      "Accept",
      "Authorization",
      "X-HTTP-Method-Override",
      "Set-Cookie",
      "Cookie",
      "Request",
    ], 
  })
  );
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json())
app.use(cookieParser());

app.use(routes);

app.use((err: any, req: Request, res: Response, next: any): any => {
  console.error;
  res.status(500).send(err);
});

db().then(() => {
  console.log("DB Conexion Ready");
  app.listen(3001, () => console.log(`server listenning on port 3001 👍🏻`));
});
