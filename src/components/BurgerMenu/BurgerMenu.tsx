import { HomeIcon, TrendsIcon, FavoritesIcon, SettingsIcon, CloseIcon } from "assets";
import { CustomNavLink } from "components";
import { getAuth, signOut } from "firebase/auth";
import { ROUTE } from "router";
import { logOutUser, selectAccount, useAppDispatch, useAppSelector } from "store";
import { BurgerNav, LogOutButton, StyledBurgerMenu } from "./styles";

interface Props {
  closeMenu: () => void;
}

export const BurgerMenu = ({ closeMenu }: Props) => {
  const { isAuth } = useAppSelector(selectAccount);
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(logOutUser());

    const auth = getAuth();
    const userInfo = JSON.parse(localStorage.getItem("userInfo")!);
    if (userInfo) {
      userInfo.isAuth = false;
    }

    signOut(auth);
    localStorage.length > 0 && localStorage.setItem("userInfo", JSON.stringify(userInfo));
  };

  return (
    <StyledBurgerMenu
      initial={{ x: 150 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 250 }}
    >
      <BurgerNav $isAuth={isAuth}>
        <CustomNavLink to={ROUTE.HOME}>
          <HomeIcon />
          Home
        </CustomNavLink>
        <CustomNavLink to={ROUTE.HOME + ROUTE.TRENDS}>
          <TrendsIcon />
          Trends
        </CustomNavLink>
        <CustomNavLink to={ROUTE.HOME + ROUTE.FAVORITES}>
          <FavoritesIcon />
          Favorites
        </CustomNavLink>
        <CustomNavLink to={ROUTE.HOME + ROUTE.SETTINGS}>
          <SettingsIcon />
          Settings
        </CustomNavLink>
        {isAuth && <LogOutButton onClick={handleSignOut}>LogOut</LogOutButton>}
      </BurgerNav>
      <CloseIcon onClick={closeMenu} />
    </StyledBurgerMenu>
  );
};
