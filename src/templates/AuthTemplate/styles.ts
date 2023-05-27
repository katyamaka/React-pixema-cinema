import styled from "styled-components";
import { BackgroundImg } from "assets";
import { Media, Color } from "ui";

const StyledAuthTemplate = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;

  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-color: ${Color.DARK_THEME};

  ${Media.XXS} {
    padding: 32px 17px 48px;
  }

  ${Media.MD} {
    padding: 47px 40px 56px;
  }

  ${Media.XXL} {
    padding: 43px 62px 63px;
  }
`;

const CopyrightText = styled.p`
  place-self: center;

  color: ${Color.WHITE};
`;

export { StyledAuthTemplate, CopyrightText };
