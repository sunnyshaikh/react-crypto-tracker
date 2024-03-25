import { AppBar, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: "static",
  background: `linear-gradient(
                ${alpha(theme.palette.primary.main, 0.75)}, 
                ${alpha(theme.palette.primary.main, 0.75)}
              )`,
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  borderBottom:
    theme.palette.mode === "dark"
      ? `1px solid ${grey[800]}`
      : `1px solid ${grey[300]}`,
}));
