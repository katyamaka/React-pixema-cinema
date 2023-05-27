import styled from "styled-components";
import { Media, Color } from "ui";

const StyledFavoritesPage = styled.div`
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

const EmptyFavoritesContainer = styled.div`
  place-self: center;

  display: grid;
  grid-template-rows: repeat(2, auto);
  row-gap: 32px;
  justify-items: center;

  svg {
    place-self: center;

    max-width: 100%;
    height: auto;
  }
`;

const EmptyText = styled.p`
  color: ${Color.WHITE_THEME};
`;

export { StyledFavoritesPage, EmptyFavoritesContainer, EmptyText };
