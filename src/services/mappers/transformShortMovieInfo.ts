import { MovieInfo, MovieInfoApi } from "../../types";
export const transformShortMovieInfo = (movies: MovieInfoApi[]): MovieInfo[] =>
  movies.map(({ Title, Year, Type, Poster, imdbID: imdbId }) => ({
    imdbId,
    title: Title,
    year: Year,
    type: Type,
    poster: Poster,
  }));
