import { Select, TextArea, TextInput } from "components/FormFields";
import { useSearchCar } from "hooks";
import React, { useState } from "react";

function Search(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const result = useSearchCar(searchQuery);

  return (
    <div>
      <TextInput label="Title" />
      <TextArea label="Description" />
      <Select options={[{ value: 1, label: "USD" }]} />
    </div>
  );
}

export default Search;
