import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "router";
import { selectAccount, useAppSelector } from "store";

export const RequareAuth = () => {
  const { isAuth } = useAppSelector(selectAccount);

  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
