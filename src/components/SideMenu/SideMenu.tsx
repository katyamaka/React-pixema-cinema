import { PixemaIcon } from "assets";
import { Navigation } from "components";
import { ROUTE } from "router";
import { CopyrightText, PixemaIconLink, StyledSideMenu } from "./styles";

export const SideMenu = () => {
  return (
    <StyledSideMenu>
      <PixemaIconLink to={ROUTE.HOME}>
        <PixemaIcon />
      </PixemaIconLink>
      <Navigation />
      <CopyrightText>© All Rights Reserved</CopyrightText>
    </StyledSideMenu>
  );
};
