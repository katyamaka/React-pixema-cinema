import { MovieItem } from "components";
import { Movie } from "types";
import { checkFavorites } from "utils";
import { StyledMovieList } from "./style";

interface Props {
  movies: Movie[];
  isTrends?: boolean;
}

export const MovieList = ({ movies, isTrends }: Props) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <StyledMovieList variants={container} initial="hidden" animate="visible">
      {movies.map((movie) => (
        <MovieItem
          movie={movie}
          key={movie.imdbID}
          isFavorite={checkFavorites(movie.imdbID)}
          isTrends={isTrends}
        />
      ))}
    </StyledMovieList>
  );
};
