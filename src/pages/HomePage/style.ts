import styled from "styled-components";
import { Media, Color } from "ui";

const StyledHomePage = styled.div`
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

const StyledButton = styled.div`
  width: 150px;
  height: 60px;
  background-color: ${Color.SECONDARY};
  justify-self: center;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  border-radius: 30px;
  padding-top: 13px;
  color: white;
  :hover {
    width: 170px;
    height: 65px;
    padding-top: 17px;
  }
`;

export { StyledHomePage, ErrorText, StyledButton };
