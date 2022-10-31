import { NextFunction, Request, Response } from "express";
import axios from "axios";
const BASE_URL = `https://api.themoviedb.org/3/discover/tv?${process.env.API_KEY}&query=`;

export const getSeriesCtrl = async (req: Request, res: Response) => {
  try {
    const content = await axios.get(`${BASE_URL}`);
    res.send(content.data.results);
  } catch (error) {
    res.sendStatus(404);
  }
};

export const searchSeriesCtrl = async ({ params }: Request, res: Response) => {
    const urlSearch = `${BASE_URL}/${params.search}`;
    
    try {
      const content = await axios.get(`${urlSearch}`);
      res.send(content.data.results);
    } catch (error) {
      console.log(error);
      res.sendStatus(404);
    }
  };
  