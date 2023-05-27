import { CloseIcon, FavoritesIcon, IMDbIcon } from "assets";
import { Header, Spinner } from "components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  addFavorite,
  removeFavorite,
  selectAccount,
  selectMovieDetails,
  useAppDispatch,
  useAppSelector,
} from "store";

import { fetchMovieDetails } from "store";
import {
  DetailsContainer,
  DetailsHeader,
  GenreItem,
  GenreList,
  MoviePoster,
  MovieTitle,
  HeaderInfo,
  Runtime,
  StyledDetailsPage,
  Raiting,
  DetailsPreview,
  MovieInfo,
  Plot,
  OtherDetails,
  Info,
  AddFavoriteButton,
  RemoveFavoriteButton,
} from "./styles";
import { checkFavorites } from "utils";

export const DetailsPage = () => {
  const dispatch = useAppDispatch();
  const { movieDetails, error, isLoading } = useAppSelector(selectMovieDetails);
  const { imdb = "" } = useParams();
  const { isAuth } = useAppSelector(selectAccount);

  useEffect(() => {
    dispatch(fetchMovieDetails(imdb));
  }, [dispatch, imdb]);

  const handleAddFavorite = () => {
    const movieInfo = {
      title: title,
      year: year,
      imdbID: imdbID,
      poster: poster,
      type: type,
    };

    dispatch(addFavorite(movieInfo));
  };

  const handleRemoveFavorite = () => {
    const movieInfo = {
      title: title,
      year: year,
      imdbID: imdbID,
      poster: poster,
      type: type,
    };

    dispatch(removeFavorite(movieInfo));
  };

  const {
    type,
    title,
    year,
    released,
    runtime,
    genre,
    director,
    writer,
    actors,
    plot,
    boxOffice,
    country,
    imdbRating,
    poster,
    imdbID,
  } = movieDetails;

  return (
    <StyledDetailsPage>
      <Header />
      {isLoading && <Spinner />}
      {error && <span>{error}</span>}
      {movieDetails && (
        <DetailsContainer>
          <DetailsHeader>
            <GenreList>
              {genre?.split(", ").map((genre) => (
                <GenreItem key={genre}>{genre} •</GenreItem>
              ))}
            </GenreList>
            <MovieTitle>{title}</MovieTitle>
            <HeaderInfo>
              <Raiting>
                <IMDbIcon />
                {imdbRating}
              </Raiting>
              <Runtime>{runtime}</Runtime>
            </HeaderInfo>
          </DetailsHeader>
          <DetailsPreview>
            <MoviePoster src={poster} />
            {checkFavorites(imdbID) ? (
              <RemoveFavoriteButton onClick={handleRemoveFavorite}>
                <CloseIcon />
              </RemoveFavoriteButton>
            ) : (
              <AddFavoriteButton
                onClick={handleAddFavorite}
                disabled={isAuth ? false : true}
                $isAuth={isAuth}
              >
                <FavoritesIcon />
              </AddFavoriteButton>
            )}
          </DetailsPreview>
          <MovieInfo>
            <Plot>{plot}</Plot>
            <OtherDetails>
              <Info>Year</Info>
              <Info>{year}</Info>
              <Info>Released</Info>
              <Info>{released}</Info>
              <Info>BoxOffice</Info>
              <Info>{boxOffice}</Info>
              <Info>Country</Info>
              <Info>{country}</Info>
              <Info>Actors</Info>
              <Info>{actors}</Info>
              <Info>Director</Info>
              <Info>{director}</Info>
              <Info>Writers</Info>
              <Info>{writer}</Info>
            </OtherDetails>
          </MovieInfo>
        </DetailsContainer>
      )}
    </StyledDetailsPage>
  );
};
