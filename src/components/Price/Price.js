import { CurrencyContext } from "contexts";
import React, { useContext } from "react";

function Price({ amount, ...props }) {
  const { rate, currency } = useContext(CurrencyContext);
  return (
    <h4 {...props}>
      <span className="mr-1">{currency}</span>
      {parseInt(amount, 10) * rate}
    </h4>
  );
}

export default Price;
