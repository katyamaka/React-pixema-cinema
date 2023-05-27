import { motion } from "framer-motion";
import styled from "styled-components";

const StyledMovieList = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(208px, auto));
  gap: 40px;
`;

export { StyledMovieList };
