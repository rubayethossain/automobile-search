import {
  addCar,
  addComment,
  deleteCar,
  updateCar,
} from "dataStore/cars/cars.actions";
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

  const changeCarDetails = () => {
    dispatch(
      updateCar(1, {
        title: "Lamborghini Centuranio",
        price: 8500000,
      })
    );
  };

  const deleteCarFromStore = () => {
    dispatch(deleteCar(3));
  };

  const addCommentsToCar = () => {
    dispatch(
      addComment(1, {
        text: "Lorem ipsum dolor sit amet consectetur.",
        author: "Mr. Y",
      })
    );
  };

  return (
    <div>
      <button onClick={addNewCar}>Add New Car</button>
      <button onClick={changeCarDetails}>Update Car</button>
      <button onClick={deleteCarFromStore}>Delete Car</button>
      <button onClick={addCommentsToCar}>Add Comment</button>
    </div>
  );
}

export default AddCar;
