import { addCar } from "dataStore/cars/cars.actions";
import React from "react";
import { useDispatch } from "react-redux";

function AddCar(props) {
  const dispatch = useDispatch();

  const addNewCar = () => {
    dispatch(
      addCar({
        title: "Toyota Corolla",
        price: 15000,
        brand: "Toyota",
      })
    );
  };

  return (
    <div>
      <button onClick={addNewCar}>Add New Car</button>
    </div>
  );
}

export default AddCar;
