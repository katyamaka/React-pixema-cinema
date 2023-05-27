import { css } from "styled-components";

export const lightTheme = css`
  html[theme="light"] {
    --white: #000000;
    --dark: #ffffff;
    --graphite: #ffffff;
  }
`;

export const darkTheme = css`
  html[theme="dark"] {
    --white: #ffffff;
    --dark: #000000;
    --graphite: #323537;
  }
`;
