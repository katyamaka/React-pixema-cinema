import { MovieAPI } from "types";

export interface MovieResponse {
  Search: MovieAPI[];
  totalResults: string;
  Response: string;
  Error?: string;
}
