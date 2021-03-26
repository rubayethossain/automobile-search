import { CurrencyContext } from "contexts";
import React, { useContext } from "react";

function Price({ amount, ...props }) {
  const { rate } = useContext(CurrencyContext);
  return <h4 {...props}>{parseInt(amount, 10) * rate}</h4>;
}

export default Price;
