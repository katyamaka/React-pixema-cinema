import { Header, MovieList, Spinner } from "components";
import { useEffect, useState } from "react";
import { fetchTrends, useAppDispatch, useAppSelector } from "store";
import { selectTrends } from "store/selectors/trendsSelector";
import { Movie } from "types";
import { getRandomMovieKeyWord } from "utils";
import { ErrorText, StyledTrendsPage } from "./styles";

interface Params {
  search: string;
  movies: Movie[];
  page: number;
  type: string;
}

export const TrendsPage = () => {
  const { movies, isLoading, error } = useAppSelector(selectTrends);
  const dispatch = useAppDispatch();
  const [params, setParams] = useState<Params>({
    search: "" || getRandomMovieKeyWord(),
    movies: movies,
    page: 1,
    type: "movie",
  });

  useEffect(() => {
    dispatch(fetchTrends(params));
  }, [dispatch, params]);
  return (
    <StyledTrendsPage>
      <Header />
      {isLoading && <Spinner />}
      {error && <ErrorText>{error}</ErrorText>}
      {movies && movies.length > 0 && <MovieList movies={movies} isTrends />}
    </StyledTrendsPage>
  );
};
