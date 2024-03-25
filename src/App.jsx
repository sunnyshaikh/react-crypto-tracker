import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import useThemeContext from "./theme";

const App = () => {
  const { responsiveTheme } = useThemeContext();
  return (
    <main className="app" style={{ minHeight: "100vh" }}>
      <ThemeProvider theme={responsiveTheme}>
        <CssBaseline />
        <Header />
        <Container>
          <h1>Hello John</h1>
        </Container>
      </ThemeProvider>
    </main>
  );
};

export default App;
