import styled from "styled-components";
import { Media } from "ui";

const StyledTrendsPage = styled.div`
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

const ErrorText = styled.span`
  place-self: center;

  font-size: 54px;

  color: yellow;
`;

export { StyledTrendsPage, ErrorText };
