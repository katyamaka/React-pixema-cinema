import { PixemaLogo } from "components";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { selectTheme, useAppSelector } from "store";
import { CopyrightText, StyledAuthTemplate } from "./styles";

export const AuthTemplate = () => {
  const { currentTheme } = useAppSelector(selectTheme);
  useEffect(() => {
    document.documentElement.setAttribute("theme", currentTheme);
  }, [currentTheme]);

  return (
    <StyledAuthTemplate>
      <PixemaLogo />
      <Outlet />
      <CopyrightText>© All Rights Reserved BY KATYA</CopyrightText>
    </StyledAuthTemplate>
  );
};
