import { createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { resetCSS } from "./reset";

export const GlobalStyles = createGlobalStyle`
${resetCSS}

html[theme = "dark"] {
    ${darkTheme}
}

html[theme = "light"] {
    ${lightTheme}
}
`;
