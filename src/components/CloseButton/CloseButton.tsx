import { CloseButtonStyled } from "./style";
import { CloseIcon } from "../../assets";

export const CloseButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <CloseButtonStyled
      onClick={() => {
        onClick && onClick();
      }}
    >
      <CloseIcon />
    </CloseButtonStyled>
  );
};
