import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { StyledAppBar } from "./styledComponents/appBar";
import { StyledIconButton } from "./styledComponents/button";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import useThemeContext from "../context/theme";
import useCurrency from "../context/currency";

const Header = () => {
  const { mode, handleThemeToggle } = useThemeContext();
  const { currency, handleCurrency } = useCurrency();
  return (
    <Box position="sticky" top={0}>
      <StyledAppBar elevation={0}>
        <Container>
          <Toolbar disableGutters>
            <Typography variant="h5" component="h1">
              CryptoTracker
            </Typography>
            <Stack direction="row" spacing={1} ml="auto">
              <StyledIconButton onClick={handleThemeToggle}>
                {mode === "dark" ? (
                  <DarkModeTwoToneIcon />
                ) : (
                  <WbSunnyTwoToneIcon />
                )}
              </StyledIconButton>
              <FormControl sx={{ minWidth: "100px" }}>
                <InputLabel id="demo-simple-select-label" color="secondary">
                  Currency
                </InputLabel>
                <Select
                  color="secondary"
                  sx={{ height: "42px" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={currency}
                  label="Currency"
                  onChange={handleCurrency}
                >
                  <MenuItem value="INR">INR</MenuItem>
                  <MenuItem value="USD">USD</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Toolbar>
        </Container>
      </StyledAppBar>
    </Box>
  );
};

export default Header;
