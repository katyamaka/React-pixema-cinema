import styled from "styled-components";
import { Media, Color } from "ui";

const StyledMainTemplate = styled.div`
  position: relative;
  display: grid;
  min-height: 100vh;
  background-color: ${Color.DARK_THEME};

  ${Media.XXS} {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    padding: 32px 17px 48px;
  }

  ${Media.MD} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    padding: 40px 40px 56px;
  }

  ${Media.XXL} {
    grid-template-columns: 20% 80%;
    padding-bottom: 64px;
  }
`;

export { StyledMainTemplate };
