import { ReactNode } from "react";
import { StyledWrapper } from "./styles";

interface Props {
  children: ReactNode;
}

export const ModalWrapper = ({ children }: Props) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
