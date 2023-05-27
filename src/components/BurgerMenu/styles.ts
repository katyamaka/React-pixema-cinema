import { motion } from "framer-motion";
import styled from "styled-components";
import { Media, Color } from "ui";

const StyledBurgerMenu = styled(motion.div)`
  background-color: ${Color.BLACK};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 90;
  display: grid;
  grid-template-columns: 1fr auto;
  min-height: 100vh;
  width: 257px;
  padding: 24px;

  nav {
    place-self: start;
  }

  svg {
    cursor: pointer;
  }
`;

const LogOutButton = styled.button`
  font-size: 36px;
  background-color: transparent;
  border: none;
  color: ${Color.SECONDARY};
`;

const BurgerNav = styled.nav<{ $isAuth: boolean }>`
  display: grid;
  grid-template-rows: ${({ $isAuth }) => ($isAuth ? "repeat(5, auto)" : "repeat(4, auto)")};

  a {
    display: grid;
    grid-template-columns: 24px 1fr;
    column-gap: 20px;
  }

  ${Media.XXS} {
    row-gap: 32px;
  }

  ${Media.MD} {
    row-gap: 40px;
  }
`;

export { StyledBurgerMenu, BurgerNav, LogOutButton };
