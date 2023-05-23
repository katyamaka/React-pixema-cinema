import React from "react";
import { Search, useNavigate } from "react-router-dom";
import { PixemaDarkIcon, PixemaLightIcon } from "../../assets";
import { ROUTE } from "../../routes";
import { BurgerButton } from "../BurgerButton/BurgerButton";
import { UserProfile } from "../UserProfile/UserProfile";
import { HeaderStyled, StyledLogo } from "./style";

// баррел паттерн проверить

export const Header = () => {
  const darkThemeStore: boolean = useTypedSelector(
    (state) => state.user.useDarkTheme
  );
  const isMobileMenuOpen = useTypedSelector((state) => state.mobileMenu.isOpen);
  const navigate = useNavigate();
  const { width } = useWindowSize();

  return (
    <HeaderStyled className={isMobileMenuOpen ? "is-open" : ""}>
      <StyledLogo
        className={isMobileMenuOpen ? "is-open" : ""}
        onClick={() => {
          navigate(`${ROUTE.HOME}`);
        }}
      >
        {darkThemeStore ? <PixemaDarkIcon /> : <PixemaLightIcon />}
      </StyledLogo>
      {/* <Search /> это я сделаю в четверг  */}
      {width && width <= 1280 ? <BurgerButton /> : <UserProfile />}
    </HeaderStyled>
  );
};
function useWindowSize(): { width: any } {
  throw new Error("Function not implemented.");
}

function useTypedSelector(arg0: (state: any) => any) {
  throw new Error("Function not implemented.");
}
