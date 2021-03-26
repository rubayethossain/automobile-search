import React from "react";
import CurrencyContext from "./CurrencyContext";

function CurrencyProvider({ children }) {
  return (
    <CurrencyContext.Provider value={{}}>{children}</CurrencyContext.Provider>
  );
}

export default CurrencyProvider;
