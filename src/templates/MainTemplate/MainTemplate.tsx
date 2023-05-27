import { useEffect } from "react";
import { StyledMainTemplate } from "./styles";
import { selectTheme, useAppSelector } from "store";
import { SideMenu } from "components";
import { Outlet } from "react-router-dom";
import { useWindowSize } from "hooks";

export const MainTemplate = () => {
  const { currentTheme } = useAppSelector(selectTheme);
  const { width = 0 } = useWindowSize();

  useEffect(() => {
    document.documentElement.setAttribute("theme", currentTheme);
  }, [currentTheme]);

  return (
    <StyledMainTemplate>
      {width >= 1440 && <SideMenu />}
      <Outlet />
    </StyledMainTemplate>
  );
};
