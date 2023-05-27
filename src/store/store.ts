import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/ThemeSlice/themeSlice";
import homeReducer from "./slices/HomeSlice/homeSlice";
import detailsReducer from "./slices/DetailsSlice/detailsSlice";
import accountReducer from "./slices/AccountSlice/accountSlice";
import favoritesReducer from "./slices/FavoritesSlice/favoritesSlice";
import trendsReducer from "./slices/TrendsSlice/trendsSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    home: homeReducer,
    details: detailsReducer,
    account: accountReducer,
    favorites: favoritesReducer,
    trends: trendsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
