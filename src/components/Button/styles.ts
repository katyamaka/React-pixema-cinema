import styled, { css } from "styled-components";
import { Color } from "ui";

interface Props {
  $searchStyle?: boolean;
}

const StyledButton = styled.button<Props>`
  padding: 16px 10px 16px;
  background-color: ${Color.PRIMARY};
  border: none;
  border-radius: 10px;
  color: ${Color.WHITE};

  ${({ $searchStyle }) =>
    $searchStyle &&
    css`
      padding: 0;
      position: absolute;
      top: 20px;
      right: 19px;
      background: none;
    `}
`;

export { StyledButton };
