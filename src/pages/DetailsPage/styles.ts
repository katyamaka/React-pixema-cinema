import styled from "styled-components";
import { Media, Color, Typography } from "ui";
import { CarouselProvider } from "pure-react-carousel";

const StyledDetailsPage = styled.div`
  display: grid;
  grid-template-rows: 56px 1fr;

  ${Media.XXS} {
    grid-template-rows: auto 1fr;
    row-gap: 56px;
  }

  ${Media.MD} {
    grid-template-rows: 56px 1fr;
  }
`;

const AddFavoriteButton = styled.button<{ $isAuth?: boolean }>`
  padding: 19px;
  border-radius: 10px;
  border: none;
  background-color: ${Color.LIGHT};
  cursor: pointer;
`;

const RemoveFavoriteButton = styled(AddFavoriteButton)`
  background-color: ${Color.DARK};
`;

const DetailsContainer = styled.div`
  display: grid;

  ${Media.XXS} {
    grid-template-rows: repeat(3, auto);
    column-gap: 32px;
    row-gap: 32px;
  }

  ${Media.MD} {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    column-gap: 42px;
  }
`;

const DetailsHeader = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);

  ${Media.MD} {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`;

const GenreList = styled.ul`
  display: flex;
`;

const GenreItem = styled.li`
  color: ${Color.LIGHT};

  &:nth-child(n)::after {
    border: 1px solid ${Color.LIGHT};
    border-radius: 50%;
  }
`;

const HeaderInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 20px;
  justify-items: start;

  ${Media.MD} {
    align-items: start;
    justify-content: start;
  }
`;

const Raiting = styled.span`
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 10px;
  padding: 8px;
  background-color: ${Color.GREEN};
  border-radius: 6px;
  color: ${Color.DARK_THEME};

  svg path {
    fill: ${Color.DARK_THEME};
  }

  svg {
    place-self: center;
  }
`;

const MovieInfo = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  row-gap: 40px;

  ${Media.MD} {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;

const Runtime = styled.span`
  padding: 8px;

  color: ${Color.DARK_THEME};
  border-radius: 6px;
  background-color: #323537;
`;

const MovieTitle = styled.h3``;

const DetailsPreview = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  row-gap: 32px;

  ${Media.XXS} {
    place-self: center;
  }

  ${Media.MD} {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    place-self: start;
  }
`;

const Info = styled.p``;

const Plot = styled.p`
  ${Typography.B1}
`;

const MoviePoster = styled.img`
  border-radius: 20px;
`;

const Carousel = styled(CarouselProvider)`
  display: grid;
  grid-template-rows: auto 1fr;
  width: 60px;
  color: black;
`;

const OtherDetails = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(7, auto);
  row-gap: 20px;
  column-gap: 60px;

  color: ${Color.WHITE_THEME};

  ${Info}:nth-child(odd) {
    color: ${Color.LIGHT};
  }
`;

export {
  StyledDetailsPage,
  MoviePoster,
  DetailsContainer,
  DetailsHeader,
  GenreList,
  GenreItem,
  MovieTitle,
  HeaderInfo,
  Runtime,
  Raiting,
  DetailsPreview,
  MovieInfo,
  Plot,
  OtherDetails,
  Info,
  Carousel,
  AddFavoriteButton,
  RemoveFavoriteButton,
};
