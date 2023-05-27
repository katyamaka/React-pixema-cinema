import styled from "styled-components";
import { Color } from "ui";

const StyledInput = styled.input`
  padding: 16px 50px 16px 20px;
  border-radius: 10px;
  background-color: ${Color.GRAPHITE};
  border: 1px solid ${Color.LIGHT};
  color: ${Color.WHITE_THEME};

  ::placeholder {
    color: ${Color.SECONDARY};
  }

  &:focus {
    outline: none;
    border: 2px solid ${Color.PRIMARY};
  }
`;

export { StyledInput };
