export interface SearchMovies {
  Search: ShortSearchMovies[];
  totalResults: string;
  Response: "True" | "False";
  Error?: string;
}

export interface ShortSearchMovies {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface FullMovieInfo {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writers: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Production: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD?: string;
  BoxOffice: string;
  Error?: string;
}

interface Rating {
  Source: string;
  Value: string;
}
