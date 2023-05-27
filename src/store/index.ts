import { store } from "./store";
import { useAppSelector, useAppDispatch } from "../hooks/hooks/hooks";
import { toggleTheme } from "./slices/ThemeSlice/themeSlice";
import { fetchMovies } from "./slices/HomeSlice/homeSlice";
import { fetchMovieDetails } from "./slices/DetailsSlice/detailsSlice";
import { signUp } from "./slices/AccountSlice/accountSlice";
import { selectFavoritesMovies } from "./selectors/favoritesSelector";
import { addFavorite } from "./slices/FavoritesSlice/favoritesSlice";
import { selectMovieDetails } from "./selectors/movieDetailsSelector";
import { selectMovies } from "./selectors/moviesSelector";
import { selectTheme } from "./selectors/themeSelector";
import { selectAccount } from "./selectors/accountSelector";
import { fetchTrends } from "./slices/TrendsSlice/trendsSlice";
import { logOutUser } from "./slices/AccountSlice/accountSlice";
import { signIn } from "./slices/AccountSlice/accountSlice";
import { removeFavorite } from "./slices/FavoritesSlice/favoritesSlice";

export {
  removeFavorite,
  signIn,
  logOutUser,
  fetchTrends,
  selectAccount,
  selectTheme,
  selectMovies,
  selectMovieDetails,
  addFavorite,
  selectFavoritesMovies,
  store,
  signUp,
  useAppSelector,
  useAppDispatch,
  toggleTheme,
  fetchMovies,
  fetchMovieDetails,
};
