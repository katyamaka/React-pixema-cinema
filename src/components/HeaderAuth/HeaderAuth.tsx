import { PixemaDarkIcon } from "../../assets";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes";
import { HeaderStyled } from "./styles";

export const HeaderAuth = () => {
  const navigate = useNavigate();
  return (
    <HeaderStyled>
      <PixemaDarkIcon
        onClick={() => {
          navigate(`${ROUTE.HOME}`);
        }}
      />
    </HeaderStyled>
  );
};
