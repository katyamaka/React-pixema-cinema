import { PixemaIcon } from "assets";
import { ROUTE } from "router";
import { PixemaIconLink } from "./styles";

export const PixemaLogo = () => {
  return (
    <PixemaIconLink to={ROUTE.HOME}>
      <PixemaIcon />
    </PixemaIconLink>
  );
};
