import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "../../routes";
import { IMovie } from "../../types";
import {
  CardPoster,
  Title,
  SubTitle,
  MovieCardStyled,
  Text,
  linkStyle,
  MovieCardWrapper,
  DeleteButton,
} from "./style";
import { deleteFavoriteMovie, useTypedDispatch } from "../../store";
import { CloseIcon } from "../../assets";

interface IProps {
  movie: IMovie;
  showDeleteFromFavorites?: boolean;
}
export const MovieCard = ({
  movie,
  showDeleteFromFavorites = false,
}: IProps) => {
  const { imdbId, poster, title, year } = movie;
  const dispatch = useTypedDispatch();

  const deleteFavorite = () => {
    dispatch(deleteFavoriteMovie(imdbId));
  };

  return (
    <MovieCardWrapper>
      <Link
        to={`${generatePath(ROUTE.MOVIE_DETAILS, { imdbId })}`}
        style={linkStyle}
      >
        <MovieCardStyled key={imdbId}>
          {showDeleteFromFavorites && (
            <DeleteButton
              type="button"
              onClick={(event) => {
                event.preventDefault();
                deleteFavorite();
              }}
            >
              <CloseIcon />
            </DeleteButton>
          )}
          <CardPoster src={poster} alt={title} />
          <Text>
            <Title>
              {title}:{year}
            </Title>
            <SubTitle>{year}</SubTitle>
          </Text>
        </MovieCardStyled>
      </Link>
    </MovieCardWrapper>
  );
};
