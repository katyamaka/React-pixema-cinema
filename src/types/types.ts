export interface FullMovieInfoApi {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: RatingApi[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Error?: string;
}

export enum PgRating {
  pg13,
  g,
  pg,
  r,
  nc17,
  notRated,
}

export interface FullMovieInfo {
  title: string;
  year: string;
  rated: PgRating;
  released: string;
  runtime: string;
  genres: string[];
  director: string;
  writer: string;
  actors: string[];
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  metaScore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbId: string;
  type: string;
  dvd: string;
  boxOffice: string;
}

export interface MovieInfo {
  title: string;
  year: string;
  imdbId: string;
  type: string;
  poster: string;
}

export interface MovieInfoApi {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface ResponseApi {
  Search: MovieInfoApi[];
  totalResults: string;
  Response: "True" | "False";
  Error?: string;
}

export interface RatingApi {
  Source: string;
  Value: string;
}

export enum MovieTypes {
  movie = "movie",
  series = "series",
  episode = "episode",
}

export interface SearchMoviesProps {
  keyword: string;
  yearOfRelease?: string | null;
  type?: MovieTypes | null;
  page?: number;
}
