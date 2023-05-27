import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "types";

const initFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  if (favorites !== null) {
    return JSON.parse(favorites);
  } else {
    localStorage.setItem("favorites", JSON.stringify([]));
    return [];
  }
};

const setFavoritesMovies = (favoritesMovies: Movie[]) => {
  localStorage.setItem("favorites", JSON.stringify(favoritesMovies));
};

interface IFavoritesState {
  favoritesMovies: Movie[];
}

const initialState: IFavoritesState = {
  favoritesMovies: initFavorites(),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, { payload }) {
      if (!state.favoritesMovies.find((favorite) => favorite.imdbID === payload.imdbID)) {
        state.favoritesMovies.push(payload);
        setFavoritesMovies(state.favoritesMovies);
      }
    },
    removeFavorite(state, { payload }) {
      state.favoritesMovies = state.favoritesMovies.filter(
        (favoriteMovie) => favoriteMovie.imdbID !== payload.imdbID,
      );
      setFavoritesMovies(state.favoritesMovies);
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
