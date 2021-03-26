import { useState } from "react";

const { default: Button } = require("components/Button");
const { TextInput } = require("components/FormFields");

function AddCar() {
  const [carData, addCarData] = useState({
    title: "",
    price: "",
    brand: "",
    image: "",
  });

  const onInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    addCarData((carData) => ({
      ...carData,
      [name]: value,
    }));
  };

  const saveCar = (e) => {
    e.preventDefault();

    console.log(carData);
  };

  return (
    <div className="mt-4">
      <h2 className="is-size-3 mb-4">Add a new car</h2>

      <form onSubmit={saveCar}>
        <TextInput
          name="title"
          label="Car Name"
          value={carData.title}
          onChange={onInputChange}
        />

        <TextInput
          name="brand"
          label="Brand"
          value={carData.brand}
          onChange={onInputChange}
        />

        <TextInput
          name="price"
          label="Price"
          type="number"
          value={carData.price}
          onChange={onInputChange}
        />

        <TextInput
          name="image"
          label="Image url"
          value={carData.image}
          onChange={onInputChange}
        />

        <Button type="submit" className="is-success is-medium mt-2">
          Add Car
        </Button>
      </form>
    </div>
  );
}

export default AddCar;
