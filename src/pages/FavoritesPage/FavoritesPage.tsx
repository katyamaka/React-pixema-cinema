import { EmptyFavoritesIcon } from "assets";
import { Header, MovieList } from "components";
import { selectFavoritesMovies, useAppSelector } from "store";
import { EmptyFavoritesContainer, EmptyText, StyledFavoritesPage } from "./styles";

export const FavoritesPage = () => {
  const { favoritesMovies } = useAppSelector(selectFavoritesMovies);

  return (
    <StyledFavoritesPage>
      <Header />
      {favoritesMovies.length ? (
        <MovieList movies={favoritesMovies} />
      ) : (
        <EmptyFavoritesContainer>
          <EmptyFavoritesIcon />
          <EmptyText>Oops, nothing here yet. </EmptyText>
        </EmptyFavoritesContainer>
      )}
    </StyledFavoritesPage>
  );
};
