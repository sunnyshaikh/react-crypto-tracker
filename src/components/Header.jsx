import { Box, Container, Stack, Toolbar } from "@mui/material";
import React from "react";
import { StyledAppBar } from "./styledComponents/appBar";
import { StyledButton, StyledIconButton } from "./styledComponents/button";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import useThemeContext from "../theme";

const Header = () => {
  const { mode, handleThemeToggle } = useThemeContext();
  return (
    <Box position="sticky" top={0}>
      <StyledAppBar elevation={0}>
        <Container>
          <Toolbar disableGutters>
            <h2>CryptoTracker</h2>
            <Stack direction="row" spacing={1} ml="auto">
              <StyledIconButton onClick={handleThemeToggle}>
                {mode === "dark" ? (
                  <DarkModeTwoToneIcon />
                ) : (
                  <WbSunnyTwoToneIcon />
                )}
              </StyledIconButton>
              <StyledButton>Button</StyledButton>
            </Stack>
          </Toolbar>
        </Container>
      </StyledAppBar>
    </Box>
  );
};

export default Header;
