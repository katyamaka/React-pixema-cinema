import styled from "styled-components";
import { Color } from "ui";

const StyledDropdownMenu = styled.div`
  position: absolute;
  bottom: -130px;
  left: 0;
  z-index: 90;
  display: grid;
  grid-template-rows: repeat(2, 56px);
  justify-items: start;
  align-items: center;
  width: 267px;
  padding: 0px 20px 0px;
  background-color: ${Color.DARK};
  border-radius: 10px;

  :nth-child(2) {
    border-bottom: 1px solid blue;
  }

  a {
    color: white;

    :hover {
      color: ${Color.PRIMARY};
    }
  }
`;

const LogOutButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;

  :hover {
    color: ${Color.PRIMARY};
  }
`;

export { StyledDropdownMenu, LogOutButton };
