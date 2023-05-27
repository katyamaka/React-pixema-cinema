import styled from "styled-components";
import { motion } from "framer-motion";
import { Color } from "ui";
import { Typography } from "ui";

const StyledMovieItem = styled(motion.li)``;

const MovieGenre = styled.p`
  color: ${Color.WHITE_THEME};
  font-style: ${Typography.B1};
`;

const MoviePoster = styled.img`
  height: 356px;
  width: 100%;
  border-radius: 20px;
`;

const TrendsLabel = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 7px;
  align-items: center;
  justify-items: center;
  padding: 5px;
  background-color: ${Color.GREEN};
  border-radius: 6px;
`;

const Rating = styled.p`
  color: ${Color.WHITE};
`;

const MovieTitle = styled.p`
  color: ${Color.WHITE_THEME};
  font-style: ${Typography.H3};
`;

const PosterContainer = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 20px;
    right: 20px;

    fill: ${Color.WHITE};
  }

  ${TrendsLabel} {
    position: absolute;
    top: 20px;
    left: 20px;

    svg {
      position: relative;
      top: 0;
      right: 0;

      path {
        fill: ${Color.WHITE};
      }
    }
  }
`;

export {
  StyledMovieItem,
  MoviePoster,
  MovieTitle,
  PosterContainer,
  TrendsLabel,
  Rating,
  MovieGenre,
};
