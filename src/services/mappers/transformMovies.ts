import { Movie, MovieAPI } from "types";

export const transformMovies = (movies: MovieAPI[]): Movie[] => {
  return movies.map((movie) => ({
    title: movie.Title,
    year: movie.Type,
    imdbID: movie.imdbID,
    type: movie.Type,
    poster: movie.Poster,
  }));
};
