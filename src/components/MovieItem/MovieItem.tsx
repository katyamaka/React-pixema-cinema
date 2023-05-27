import { FavoriteFilmIcon, NoImageAvailableImg, TrendsIcon } from "assets";
import { memo } from "react";
import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { selectAccount, useAppSelector } from "store";
import { Movie } from "types";
import { getMovieRating } from "utils";
import {
  MoviePoster,
  MovieTitle,
  PosterContainer,
  Rating,
  StyledMovieItem,
  TrendsLabel,
  MovieGenre,
} from "./style";

interface Props {
  movie: Movie;
  isFavorite?: boolean;
  isTrends?: boolean;
}

export const MovieItem = memo(
  ({ movie: { imdbID, poster, title, type, year }, isFavorite, isTrends }: Props) => {
    const { isAuth } = useAppSelector(selectAccount);

    const movie = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
      },
    };

    return (
      <StyledMovieItem variants={movie} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link to={generatePath(ROUTE.DETAILS, { imdb: imdbID })}>
          <PosterContainer>
            <MoviePoster src={poster === "N/A" ? NoImageAvailableImg : poster} alt={title} />
            {isFavorite && isAuth && <FavoriteFilmIcon />}
            {isTrends && (
              <TrendsLabel>
                <TrendsIcon />
                <Rating>{getMovieRating()}</Rating>
              </TrendsLabel>
            )}
          </PosterContainer>
          <MovieTitle>{title}</MovieTitle>
          <MovieGenre>{type}</MovieGenre>
        </Link>
      </StyledMovieItem>
    );
  },
);
