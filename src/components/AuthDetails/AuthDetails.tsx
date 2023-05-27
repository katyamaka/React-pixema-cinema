import { MenuArrowIcon, NotAuthorizedIcon } from "assets";
import { DropdownMenu } from "components";
import { signOut, getAuth } from "firebase/auth";
import { useToggle } from "hooks";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { logOutUser, selectAccount, useAppDispatch, useAppSelector } from "store";
import { getUserInitials } from "utils";
import {
  FullUserName,
  StyledAuthDetails,
  UserInfoContainer,
  UserMenu,
  UserNameInitials,
} from "./styles";

export const AuthDetails = () => {
  const { name, isAuth } = useAppSelector(selectAccount);
  const dispatch = useAppDispatch();
  const [isOpenUsermMenu, setIsOpenUsermMenu] = useToggle();

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

  const variants = {
    notClicked: {
      rotate: 0,
    },
    checked: {
      rotate: 90,
    },
  };

  return (
    <StyledAuthDetails>
      <UserInfoContainer>
        <UserNameInitials>
          {isAuth ? getUserInitials(name) : <NotAuthorizedIcon />}
        </UserNameInitials>
        <FullUserName>{isAuth ? name : <Link to={ROUTE.SIGN_IN}>Sign In</Link>}</FullUserName>
      </UserInfoContainer>
      <UserMenu
        animate={isOpenUsermMenu ? "checked" : "notClicked"}
        variants={variants}
        onClick={setIsOpenUsermMenu}
        disabled={isAuth ? false : true}
      >
        <MenuArrowIcon />
      </UserMenu>
      {isOpenUsermMenu && isAuth && <DropdownMenu />}
    </StyledAuthDetails>
  );
};
