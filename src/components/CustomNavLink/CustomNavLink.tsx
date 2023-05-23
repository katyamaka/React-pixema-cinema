import { useMatch } from "react-router";
import { NavLinkStyled } from "./styles";
import { NavLinkProps } from "react-router-dom";

export const CustomNavLink = ({ children, to, ...props }: NavLinkProps) => {
  const isActive = useMatch(to as string);
  return (
    <NavLinkStyled {...props} $isActive={isActive} to={to}>
      {children}
    </NavLinkStyled>
  );
};
