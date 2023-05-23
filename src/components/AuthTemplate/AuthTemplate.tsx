import { Outlet } from "react-router-dom";
import { FooterAuth } from "../FooterAuth/FooterAuth";
import { HeaderAuth } from "../HeaderAuth/HeaderAuth";
import { AuthTemplateStyled } from "./styles";

export const AuthTemplate = () => {
  return (
    <AuthTemplateStyled>
      <HeaderAuth />
      <Outlet />
      <FooterAuth />
    </AuthTemplateStyled>
  );
};
