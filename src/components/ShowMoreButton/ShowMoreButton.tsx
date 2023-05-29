import { SmallSpinner } from "components";
import { StyledShowMoreButton } from "./styles";

interface Props {
  onClick: () => void;
  isMoreLoading?: boolean;
}

export const ShowMoreButton = ({ onClick, isMoreLoading }: Props) => {
  return (
    <StyledShowMoreButton onClick={onClick} disabled={isMoreLoading}>
      Show more <SmallSpinner />
    </StyledShowMoreButton>
  );
};
