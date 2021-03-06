import Button from "components/Button";
import { TextInput } from "components/FormFields";
import Price from "components/Price";
import { useSearchCar } from "hooks";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { paths } from "Router";

function Search(props) {
  const [searchQuery, setSearchQuery] = useState("BMW");
  const [searchText, setSearchText] = useState("BMW");

  const result = useSearchCar(searchQuery);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const searchCar = () => {
    setSearchQuery(searchText);
  };

  const renderResults = () => {
    if (!result.length)
      return (
        <p className="has-text-centered column">NO CAR FOUND, PLEASE SEARCH</p>
      );

    return result.map((auto, key) => (
      <div className="column is-one-quarter" key={key}>
        <div className="box mb-2">
          <img src={auto.image} alt="" />
          <h3 className="is-size-5 has-text-weight-medium">{auto.title}</h3>
          <Price className="has-text-danger" amount={auto.price} />
          <Button className="is-small is-link mt-2">
            <Link
              to={`${paths.CAR_DETAILS}${auto.id}`}
              className="has-text-white"
            >
              Details
            </Link>
          </Button>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <h2 className="is-size-1 has-text-centered has-text-weight-bold">
        Welcome to Autoole <br />
        Car Search Engine
      </h2>

      <div className="box mt-5">
        <div className="search-wrapper">
          <TextInput
            placeholder="BMW, Toyota, etc.."
            style={{ flex: 1 }}
            value={searchText}
            onChange={handleSearchChange}
          />
          <Button className="is-success" onClick={searchCar}>
            Search
          </Button>
        </div>
      </div>

      <div className="mt-5 columns is-mobile is-multiline">
        {renderResults()}
      </div>
    </div>
  );
}

export default Search;
