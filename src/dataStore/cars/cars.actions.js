import { ADD_CAR, ADD_COMMENT, DELETE_CAR, UPDATE_CAR } from "./cars.type";

export const addCar = (carDetails) => {
  return {
    type: ADD_CAR,
    payload: carDetails,
  };
};

export const updateCar = (carId, updateData) => {
  return {
    type: UPDATE_CAR,
    payload: updateData,
    id: carId,
  };
};

export const deleteCar = (carId) => {
  return {
    type: DELETE_CAR,
    id: carId,
  };
};

export const addComment = (carId, comment) => {
  return {
    type: ADD_COMMENT,
    id: carId,
    payload: comment,
  };
};
