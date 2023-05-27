import { createSlice } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

interface ThemeSlice {
  currentTheme: Theme;
}

const initialState: ThemeSlice = {
  currentTheme: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === "dark" ? "light" : "dark";
    },
  },
});

export default themeSlice.reducer;

export const { toggleTheme } = themeSlice.actions;
