import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { ErrorCode, NotFoundMessage, NotFoundMessageContainer, StyledNotFoundPage } from "./styles";

export const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <NotFoundMessageContainer>
        <NotFoundMessage>Not found</NotFoundMessage>
        <NotFoundMessage>
          Wrong link, go <Link to={ROUTE.HOME}>here</Link> and try again.
        </NotFoundMessage>
      </NotFoundMessageContainer>
    </StyledNotFoundPage>
  );
};
