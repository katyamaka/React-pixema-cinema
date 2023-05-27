import styled from "styled-components";
import { Color } from "ui";

const StyledThemeToggler = styled.label`
  --active-color: ${Color.PRIMARY};
  --inactive-color: ${Color.SECONDARY};
  --hover-active-color: ${Color.PRIMARY_LIGHT};
  --hover-inactive-color: ${Color.LIGHT};
  --rail-height: 1.5rem;
  --rail-ratio: 1.8;
  --inset: 2px;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  gap: 1em;
  user-select: none;
`;

const ToggleInput = styled.input`
  order: 1;
  cursor: pointer;
  position: relative;
  font-size: 1.2rem;
  width: calc(var(--rail-height) * var(--rail-ratio));
  height: var(--rail-height);

  /* hide default styling */
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0;
  border-radius: 1em;

  &:before {
    content: "";

    position: absolute;
    z-index: 0;

    width: 100%;
    height: 100%;

    background-color: var(--inactive-color);
    border-radius: var(--rail-height);

    transition: all 100ms ease;
  }

  &:checked:before {
    background-color: var(--active-color);
  }

  &:after {
    content: "";
    background-color: #fff;
    position: absolute;
    aspect-ratio: 1;
    top: var(--inset);
    bottom: var(--inset);
    left: var(--inset);
    border-radius: 100%;
    transition: left 200ms ease;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.3);
  }

  &:checked:after {
    left: calc(100% - var(--rail-height) + var(--inset));
  }
`;

export { ToggleInput, StyledThemeToggler };
