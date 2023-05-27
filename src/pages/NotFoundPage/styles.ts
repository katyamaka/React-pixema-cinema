import styled from "styled-components";
import { Media, Color } from "ui";

const StyledNotFoundPage = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: white;
`;

const ErrorCode = styled.span`
  font-size: 7rem;

  color: ${Color.WHITE};
`;

const NotFoundMessageContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  row-gap: 25px;
  justify-items: center;
  max-width: 500px;
`;

const NotFoundMessage = styled.p`
  font-size: 32px;
  text-align: center;

  a {
    text-decoration: underline;
    color: ${Color.WHITE};
  }

  ${Media.XXS} {
    font-size: 24px;
  }

  ${Media.SM} {
    font-size: 32px;
  }
`;

export { StyledNotFoundPage, NotFoundMessage, NotFoundMessageContainer, ErrorCode };
