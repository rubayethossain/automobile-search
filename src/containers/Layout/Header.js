import Button from "components/Button";
import { Select } from "components/FormFields";
import { CURRENCIES } from "const";
import { CurrencyContext } from "contexts";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { paths } from "Router";

function Header(props) {
  const { currency, setCurrency } = useContext(CurrencyContext);

  const onCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand" style={{ flexDirection: "column" }}>
        <h1 className="is-size-3 has-text-weight-bold mb-0">
          <Link to={paths.SEARCH}>AUTOOLE</Link>
        </h1>
        <p className="is-size-7">Search Your Dream Auto!</p>
      </div>

      <div className="navbar-end">
        <Button className="is-primary mt-2 mr-3">
          <Link className="has-text-white" to={paths.ADD_CAR}>
            Add Car
          </Link>
        </Button>
        <Select
          options={CURRENCIES}
          onChange={onCurrencyChange}
          value={currency}
        />
      </div>
    </nav>
  );
}

export default Header;
