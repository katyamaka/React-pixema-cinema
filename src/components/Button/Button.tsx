import { StyledButton } from "./styles";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props {
  children: ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
}

export const Button = ({ children, onClick, type = "submit" }: Props) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};
