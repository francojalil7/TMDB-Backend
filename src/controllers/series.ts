import { NextFunction, Request, Response } from "express";
import axios from "axios";
const BASE_URL = `https://api.themoviedb.org/3/discover/tv?${process.env.API_KEY}&query=`;
const populares = `https://api.themoviedb.org/3/discover/movie?${process.env.API_KEY}?sort_by=popularity.desc`;

export const getSeriesCtrl = async (req: Request, res: Response) => {
  try {
    const content = await axios.get(BASE_URL);
    res.send(content.data.results);
  } catch (error) {
    res.sendStatus(404);
  }
};

export const getPopularesCtrl = async (req: Request, res: Response) => {
  try {
    const recentSeries = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?${process.env.API_KEY}&language=es&page=1`
    );
    res.send(recentSeries.data.results);
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

export const topRatedCtrl = async (req: Request, res: Response) => {
  try {
    const recentSeries = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?${process.env.API_KEY}&language=es&page=1`
    );
    res.send(recentSeries.data.results);
  } catch (error) {
    res.sendStatus(404);
  }
};