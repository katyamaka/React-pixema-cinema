import { FavoritesIcon, HomeIcon, SettingsIcon, TrendsIcon } from "assets";
import { CustomNavLink } from "components";
import { ROUTE } from "router";
import { StyledNavigation } from "./styles";

export const Navigation = () => {
  return (
    <StyledNavigation>
      <CustomNavLink to={ROUTE.HOME}>
        <HomeIcon />
        Home
      </CustomNavLink>
      <CustomNavLink to={ROUTE.TRENDS}>
        <TrendsIcon />
        Trends
      </CustomNavLink>
      <CustomNavLink to={ROUTE.FAVORITES}>
        <FavoritesIcon />
        Favorites
      </CustomNavLink>
      <CustomNavLink to={ROUTE.SETTINGS}>
        <SettingsIcon />
        Settings
      </CustomNavLink>
    </StyledNavigation>
  );
};
