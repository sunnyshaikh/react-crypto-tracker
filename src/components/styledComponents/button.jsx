import { Button, IconButton, styled } from "@mui/material";
import { grey } from "@mui/material/colors";

export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  color: "#fff",
  background: `linear-gradient(
    105deg, 
    ${theme.palette.secondary.light},
    ${theme.palette.secondary.dark}
  )`,
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: "12px",
  border:
    theme.palette.mode === "dark"
      ? `1px solid ${grey[800]}`
      : `1px solid ${grey[400]}`,
}));
