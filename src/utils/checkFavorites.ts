import { MovieDetails } from "types";

export const checkFavorites = (imdb: string) => {
  const notParsedFavorites = localStorage.getItem("favorites");

  if (notParsedFavorites !== null) {
    const favorites = JSON.parse(notParsedFavorites);
    if (favorites.find((favorite: MovieDetails) => favorite.imdbID === imdb)) {
      return true;
    } else {
      return false;
    }
  }
};
