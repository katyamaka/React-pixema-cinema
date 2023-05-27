import styled from "styled-components";
import { Link } from "react-router-dom";
import { Color } from "ui";

const PixemaIconLink = styled(Link)`
  place-self: center start;

  path:nth-child(n + 4) {
    fill: ${Color.DARK_THEME};
  }
`;

export { PixemaIconLink };
