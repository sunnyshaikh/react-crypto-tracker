import { Typography, styled } from "@mui/material";

export const StyledTypography = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(
    105deg,
    ${theme.palette.secondary.light}, 
    ${theme.palette.secondary.dark}
  )`,
  color: "transparent",
  WebkitBackgroundClip: "text",
}));
