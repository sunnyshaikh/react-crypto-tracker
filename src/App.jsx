import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import useThemeContext from "./context/theme";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home"));
const Coin = lazy(() => import("./pages/Coin"));

const App = () => {
  const { responsiveTheme } = useThemeContext();
  return (
    <main className="app" style={{ minHeight: "100vh" }}>
      <ThemeProvider theme={responsiveTheme}>
        <CssBaseline />
        <Header />
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coin/:id" element={<Coin />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </main>
  );
};

export default App;
