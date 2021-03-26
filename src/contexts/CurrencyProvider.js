import React, { useEffect, useState } from "react";
import CurrencyContext from "./CurrencyContext";

function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("USD");
  const [rate, setRate] = useState(1);
  const [currencyRates, setCurrencyRates] = useState({});

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const req = await fetch(
          "https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR,GBP,JPY"
        );
        const res = await req.json();

        setCurrencyRates(res.rates);
      } catch (error) {}
    };

    fetchCurrencyRates();
  }, []);

  useEffect(() => {
    if (currency === "USD") {
      setRate(1);
    } else {
      setRate(currencyRates[currency]);
    }
  }, [currency, currencyRates]);

  return (
    <CurrencyContext.Provider value={{ rate, currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export default CurrencyProvider;
