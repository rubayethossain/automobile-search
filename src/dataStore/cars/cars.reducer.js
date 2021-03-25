import { ADD_CAR, UPDATE_CAR, DELETE_CAR, ADD_COMMENT } from "./cars.type";

const INITIAL_STATE = [
  {
    id: 1,
    title: "Lamborghini Gallerdo",
    price: 12340000,
    brand: "Lamborghini",
    comments: [
      {
        text: "Lorem ipsum dolor sit.",
        author: "Mr. X",
      },
    ],
  },
];

const reducer = (state = INITIAL_STATE, action) => {
  const { type, id, payload } = action;

  switch (type) {
    case ADD_CAR: {
      // Copy existing cars
      const newCars = [...state];

      // Check if cars is empty
      if (!newCars.length) {
        newCars.push({
          ...payload,
          id: 1,
          comments: [],
        });
      } else {
        // Get last car id to generate new car id
        const lastCarId = newCars[newCars.length - 1].id;

        // Add new car
        newCars.push({
          ...payload,
          id: lastCarId + 1,
          comments: [],
        });
      }

      return newCars;
    }

    case UPDATE_CAR: {
      // Copy existing cars
      const cars = [...state];

      // Find car index from the cars array
      const carIndex = cars.findIndex((car) => car.id === id);

      // Return state when no car found
      if (carIndex < 0) return state;

      // Update car data with new data
      const updatedCar = {
        ...cars[carIndex],
        ...payload,
      };

      // Replace car with updated data
      cars.splice(carIndex, 1, updatedCar);

      return cars;
    }

    case DELETE_CAR: {
      // Copy existing cars
      const cars = [...state];

      // Find car index from the cars array
      const carIndex = cars.findIndex((car) => car.id === id);

      // Return state when no car found
      if (carIndex < 0) return state;

      // Remove car by index
      cars.splice(carIndex, 1);

      return cars;
    }

    case ADD_COMMENT: {
      // Copy existing cars
      const cars = [...state];

      // Find car index from the cars array
      const carIndex = cars.findIndex((car) => car.id === id);

      // Return state when no car found
      if (carIndex < 0) return state;

      // Update car data with new comment
      const updatedCar = {
        ...cars[carIndex],
        comments: [...cars[carIndex]["comments"], payload],
      };

      // Replace car with updated data
      cars.splice(carIndex, 1, updatedCar);

      return cars;
    }

    default:
      return state;
  }
};

export default reducer;
