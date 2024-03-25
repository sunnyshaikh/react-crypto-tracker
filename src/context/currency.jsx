import { createContext, useContext, useState } from "react";

const CurrencyContext = createContext(null);

export const CurrencyContextProvider = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const handleCurrency = (e) => {
    setCurrency(e.target.value);
  };
  return (
    <CurrencyContext.Provider value={{ currency, handleCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

const useCurrency = () => useContext(CurrencyContext);

export default useCurrency;
