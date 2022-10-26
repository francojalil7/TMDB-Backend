import { Request, Response, Router } from "express";
import { multiSearchCtrl } from "../controllers/search";
const searchRouter = Router();

searchRouter.get("/:search", multiSearchCtrl);

export default searchRouter;
