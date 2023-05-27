import styled from "styled-components";
import { NavLink, PathMatch } from "react-router-dom";
import { Color } from "ui";

const StyledNavLink = styled(NavLink)<{ $isActive: PathMatch<"*"> | null }>`
  color: ${({ $isActive }) => ($isActive ? Color.PRIMARY : Color.SECONDARY)};

  svg path {
    fill: ${({ $isActive }) => ($isActive ? Color.PRIMARY : Color.SECONDARY)};
  }
`;

export { StyledNavLink };
