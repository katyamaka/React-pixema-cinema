import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "ui";

const StyledAuthDetails = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  svg {
    place-self: center;
  }
`;

const UserMenu = styled(motion.button)`
  place-self: center;
  background-color: transparent;
  border: none;

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
  }
`;

const UserInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 56px auto;
  column-gap: 20px;
`;

const FullUserName = styled.span`
  place-self: center start;
  color: ${Color.WHITE_THEME};
`;

const UserNameInitials = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Color.PRIMARY};
  color: ${Color.WHITE};
  border-radius: 10px;
`;

export { StyledAuthDetails, FullUserName, UserNameInitials, UserInfoContainer, UserMenu };
