import { createTheme, responsiveFontSizes } from "@mui/material";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("theme") || "dark");

  const handleThemeToggle = useCallback(() => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  }, [mode]);

  const getColors = useCallback((mode) => {
    return {
      ...(mode === "dark"
        ? {
            primary: {
              100: "#cdcfd5",
              200: "#9c9faa",
              300: "#6a6f80",
              400: "#393f55",
              500: "#070f2b",
              600: "#060c22",
              700: "#04091a",
              800: "#030611",
              900: "#010309",
            },
          }
        : {
            primary: {
              100: "#ffffff",
              200: "#f9fafa",
              300: "#f7f7f8",
              400: "#f4f5f5",
              500: "#ffffff",
              600: "#c1c2c2",
              700: "#f1f2f3",
              800: "#606161",
              900: "#303031",
            },
          }),
    };
  }, []);

  const themeSettings = useCallback((mode) => {
    const colors = getColors(mode);
    const obj = {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              primary: {
                main: colors.primary[600],
              },
              secondary: {
                main: "#a27d54",
              },
              background: {
                default: colors.primary[600],
              },
            }
          : {
              primary: {
                main: colors.primary[500],
                light: colors.primary[100],
              },
              secondary: {
                main: "#a27d54",
              },
              background: {
                default: colors.primary[700],
              },
            }),
      },
      typography: {
        fontFamily: ["Nunito Sans", "Roboto", "sans-serif"].join(","),
        h1: {
          fontFamily: ["Lato", "Roboto", "sans-serif"].join(","),
          fontWeight: "700",
        },
        h2: {
          fontFamily: ["Lato", "Roboto", "sans-serif"].join(","),
          fontWeight: "700",
        },
        h3: {
          fontFamily: ["Lato", "Roboto", "sans-serif"].join(","),
          fontWeight: "700",
        },
        h4: {
          fontFamily: ["Lato", "Roboto", "sans-serif"].join(","),
          fontWeight: "600",
        },
        h5: {
          fontFamily: ["Lato", "Roboto", "sans-serif"].join(","),
          fontWeight: "500",
        },
      },
      components: {
        MuiButton: {
          defaultProps: {
            variant: "contained",
          },
        },
      },
    };
    return obj;
  }, []);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  console.log(themeSettings(mode), theme);

  const responsiveTheme = responsiveFontSizes(theme);

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ responsiveTheme, mode, handleThemeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);

export default useThemeContext;
