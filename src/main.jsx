import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeContextProvider } from "./context/theme.jsx";
import { CurrencyContextProvider } from "./context/currency.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <CurrencyContextProvider>
          <App />
        </CurrencyContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
