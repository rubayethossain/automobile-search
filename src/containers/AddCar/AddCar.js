import { addCar, updateCar } from "dataStore/cars/cars.actions";
import { useEffect, useState } from "react";
import { useDispatch, connect } from "react-redux";
import { useHistory, useRouteMatch } from "react-router";
import { paths } from "Router";

const { default: Button } = require("components/Button");
const { TextInput } = require("components/FormFields");

function AddCar({ cars }) {
  const [carData, addCarData] = useState({
    title: "",
    price: "",
    brand: "",
    image: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const { params } = useRouteMatch();

  useEffect(() => {
    if (params.car_id) {
      // eslint-disable-next-line eqeqeq
      const carDetails = cars.find((car) => car.id == params.car_id);

      addCarData(carDetails);
    }
  }, [params, cars]);

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

    dispatch(addCar(carData));
    const lastCar = cars[cars.length - 1];

    history.push(`${paths.CAR_DETAILS}${lastCar.id + 1}/`);
  };

  const updateCarData = (e) => {
    e.preventDefault();

    dispatch(updateCar(params.car_id, carData));
    history.push(`${paths.CAR_DETAILS}${params.car_id}/`);
  };

  return (
    <div className="mt-4">
      <h2 className="is-size-3 mb-4">
        {params.car_id ? "Update Car" : "Add New Car"}
      </h2>

      <form onSubmit={params.car_id ? updateCarData : saveCar}>
        <TextInput
          name="title"
          label="Car Name"
          value={carData.title}
          onChange={onInputChange}
          required
        />

        <TextInput
          name="brand"
          label="Brand"
          value={carData.brand}
          onChange={onInputChange}
          required
        />

        <TextInput
          name="price"
          label="Price"
          type="number"
          value={carData.price}
          onChange={onInputChange}
          required
        />

        <TextInput
          name="image"
          label="Image url"
          value={carData.image}
          onChange={onInputChange}
          required
        />

        <Button type="submit" className="is-success is-medium mt-2">
          {params.car_id ? "Update" : "Save"}
        </Button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
  };
}

export default connect(mapStateToProps)(AddCar);
