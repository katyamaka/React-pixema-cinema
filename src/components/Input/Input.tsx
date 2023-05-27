import { StyledInput } from "./styles";

interface Props {
  placeholder: string;
}

export const Input = (props: Props) => {
  return <StyledInput {...props} />;
};
