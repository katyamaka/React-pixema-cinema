import styled from "styled-components";
import { StyledInput } from "components/Input/styles";
import { Media, Color } from "ui";

const StyledHeader = styled.header`
  display: grid;

  ${Media.XXS} {
    grid-template-columns: 1fr 56px;
    grid-template-rows: repeat(2, 56px);
  }

  ${Media.MD} {
    grid-template-columns: 202px 1fr 56px;
    grid-template-rows: auto;
    column-gap: 32px;
  }

  ${Media.XXL} {
    grid-template-columns: 1fr 264px;
    column-gap: 40px;
  }
`;

const BurgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${Color.PRIMARY};
  border-radius: 10px;
  border: none;
`;

const HeaderForm = styled.form`
  position: relative;
  display: grid;

  ${Media.XXS} {
    grid-column: span 2;
    grid-row: 2/3;
  }

  ${Media.MD} {
    grid-column: 2/3;
    grid-row: 1;
  }

  ${Media.XXL} {
    grid-column: 1/2;
  }

  svg {
    position: absolute;
    top: 22px;
    right: 21px;

    cursor: pointer;
  }
`;

const Search = styled(StyledInput)`
  place-self: stretch;
`;
export { StyledHeader, Search, HeaderForm, BurgerButton };
