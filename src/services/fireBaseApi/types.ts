interface LoginRequestApi {
  email: string;
  password: string;
}

interface RegisterInfoApi {
  name: string;
  email: string;
  password: string;
}

enum FirebaseCollections {
  favorites = "favorites",
  users = "users",
  trends = "trends",
}

interface UserModelApi {
  authProvider: string;
  email: string;
  name: string;
  uid: string;
  useDarkTheme?: boolean;
}

interface FavoriteMoviesApi {
  uid: string;
  imdbId: string;
  title: string;
  year: string;
  type: string;
  poster: string;
}

interface TrendsMoviesApi {
  imdbId: string;
  title: string;
  year: string;
  type: string;
  poster: string;
}

export type {
  TrendsMoviesApi,
  FavoriteMoviesApi,
  UserModelApi,
  FirebaseCollections,
  RegisterInfoApi,
  LoginRequestApi,
};
