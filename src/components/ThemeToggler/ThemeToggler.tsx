import { selectTheme, toggleTheme, useAppDispatch, useAppSelector } from "store";
import { StyledThemeToggler, ToggleInput } from "./styles";

export const ThemeToggler = () => {
  const dispatch = useAppDispatch();
  const { currentTheme } = useAppSelector(selectTheme);

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <StyledThemeToggler onClick={handleTheme}>
      <ToggleInput type="checkbox" defaultChecked={currentTheme === "light" ? false : true} />
    </StyledThemeToggler>
  );
};
