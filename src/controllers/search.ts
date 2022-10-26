import { NextFunction, Request, Response } from "express";
import axios from "axios";
const BASE_URL = `https://api.themoviedb.org/3/search/movie?${process.env.API_KEY}&query=`;

export const multiSearchCtrl = async ({ params }: Request, res: Response) => {
  const urlSearch = `${BASE_URL}/${params.search}`;
  
  try {
    const content = await axios.get(`${urlSearch}`);
    res.send(content.data.results);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
};
