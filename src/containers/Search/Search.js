import { useSearchCar } from "hooks";
import React, { useState } from "react";

function Search(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const result = useSearchCar(searchQuery);

  return <div></div>;
}

export default Search;
