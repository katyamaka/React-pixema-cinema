import axios from "axios";
import { MovieDetailsAPI } from "types";
import { MovieResponse } from "./types";

export class MovieAPI {
  private static readonly BASE_URL = process.env.REACT_APP_SERVICES_MOVIE_API_BASE_URL;

  private static readonly API = axios.create({
    baseURL: MovieAPI.BASE_URL,
  });

  static async getMovieBySearch(s: string, type = "movie", page: number) {
    const params = {
      s: s,
      type: type,
      page: page,
    };

    const { data } = await this.API.get<MovieResponse>("", { params });

    return data;
  }

  static async getMovieByIMDB(imdb: string) {
    const params = {
      i: imdb,
      plot: "full",
    };

    const { data } = await this.API.get<MovieDetailsAPI>("", { params });

    return data;
  }
}
