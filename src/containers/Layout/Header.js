import Button from "components/Button";
import { Select } from "components/FormFields";
import { CURRENCIES } from "const";
import React from "react";
import { Link } from "react-router-dom";
import { paths } from "Router";

function Header(props) {
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
        <Select options={CURRENCIES} />
      </div>
    </nav>
  );
}

export default Header;
