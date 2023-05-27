import { ReactNode } from "react";
import { useMatch } from "react-router-dom";
import { ROUTE } from "router";
import { StyledNavLink } from "./styles";

interface Props {
  children: ReactNode;
  to: ROUTE | string;
}

export const CustomNavLink = ({ children, to }: Props) => {
  const match = useMatch(to);

  return (
    <StyledNavLink $isActive={match} to={to}>
      {children}
    </StyledNavLink>
  );
};
