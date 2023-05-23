import { MovieCard } from "../../components";
import { MovieInfo } from "../../types";
import { StyledList } from "./style";

interface IProps {
  movies: MovieInfo[];
  showDeleteFromFavorites?: boolean;
}

export const MoviesList = ({
  movies,
  showDeleteFromFavorites = false,
}: IProps) => {
  return (
    <StyledList>
      {movies.map((movie) => (
        <MovieCard
          movie={movie}
          key={movie.imdbId}
          showDeleteFromFavorites={showDeleteFromFavorites}
        ></MovieCard>
      ))}
    </StyledList>
  );
};
