import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { logOutUser, useAppDispatch } from "store";
import { LogOutButton, StyledDropdownMenu } from "./styles";

export const DropdownMenu = () => {
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
    <StyledDropdownMenu>
      <Link to={ROUTE.HOME + ROUTE.SETTINGS}>Edit profile</Link>
      <LogOutButton onClick={handleSignOut}>LogOut</LogOutButton>
    </StyledDropdownMenu>
  );
};
