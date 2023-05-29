import styled from "styled-components";
import { Color, Typography } from "ui";

const StyledShowMoreButton = styled.button`
  display: flex;
  align-items: center;
  align-self: center;
  grid-gap: 10px;
  padding: 8px 24px;
  border-radius: 30px;
  background: ${Color.GRAPHITE};
  border: none;
  color: ${Color.WHITE};
  cursor: pointer;
  transition: box-shadow 0.3s;
  width: 170px;
  height: 50px;
  margin-left: 40%;
  margin-right: 50%;
  text-align: center;
  justify-content: center;
  font-style:  ${Typography.B1}
  &:hover {
    box-shadow: ${Color.LIGHT} 0px 5px 20px 0px;
  }
`;

export { StyledShowMoreButton };
