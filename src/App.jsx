import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import useThemeContext from "./context/theme";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
const Home = lazy(() => import("./pages/Home"));
const Coin = lazy(() => import("./pages/Coin"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 100000000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

const App = () => {
  const { responsiveTheme } = useThemeContext();
  return (
    <main className="app" style={{ minHeight: "100vh" }}>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </main>
  );
};

export default App;
