import { RootState } from "store/store";

export const selectFavoritesMovies = (state: RootState) => state.favorites;
