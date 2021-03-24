import { GET_CARS } from "./cars.type";

export const getAllCars = () => {
  return {
    type: GET_CARS,
  };
};
