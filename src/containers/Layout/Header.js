import { Select } from "components/FormFields";
import { CURRENCIES } from "const";
import React from "react";

function Header(props) {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand" style={{ flexDirection: "column" }}>
        <h1 className="is-size-3 has-text-weight-bold mb-0">AUTOOLE</h1>
        <p className="is-size-7">Search Your Dream Auto!</p>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <Select options={CURRENCIES} />
        </div>
      </div>
    </nav>
  );
}

export default Header;
