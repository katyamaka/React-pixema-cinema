import { Header, ThemeToggler } from "components";
import { selectAccount, useAppSelector } from "store";
import {
  ColorMode,
  ColorModeInfo,
  ColorModeText,
  ColorModeTextContainer,
  Label,
  Password,
  PasswordInfo,
  Profile,
  ProfileInfo,
  SettingsContainer,
  SettingsInput,
  StyledSettingsPage,
  Title,
} from "./styles";

export const SettingsPage = () => {
  const { currentTheme } = useAppSelector((state) => state.theme);
  const { name, email } = useAppSelector(selectAccount);

  return (
    <StyledSettingsPage>
      <Header />
      <SettingsContainer>
        <Profile>
          <Title>Profile</Title>
          <ProfileInfo $currentTheme={currentTheme}>
            <Label>
              Name
              <SettingsInput $currentTheme={currentTheme} placeholder={name} />
            </Label>
            <Label>
              Email
              <SettingsInput $currentTheme={currentTheme} placeholder={email || ""} />
            </Label>
          </ProfileInfo>
        </Profile>
        <Password>
          <Title>Password</Title>
          <PasswordInfo $currentTheme={currentTheme}>
            <Label>
              Password
              <SettingsInput
                $currentTheme={currentTheme}
                type="password"
                placeholder="Your password"
              />
            </Label>
            <Label>
              New password
              <SettingsInput
                $currentTheme={currentTheme}
                type="password"
                placeholder="New password"
              />
            </Label>
            <Label>
              Confirm password
              <SettingsInput
                $currentTheme={currentTheme}
                type="password"
                placeholder="Confirm password"
              />
            </Label>
          </PasswordInfo>
        </Password>
        <ColorMode>
          <Title>Color mode</Title>
          <ColorModeInfo $currentTheme={currentTheme}>
            <ColorModeTextContainer>
              <ColorModeText>Dark</ColorModeText>
              <ColorModeText light>Use dark thema</ColorModeText>
            </ColorModeTextContainer>
            <ThemeToggler />
          </ColorModeInfo>
        </ColorMode>
      </SettingsContainer>
    </StyledSettingsPage>
  );
};
