import {
  ADD_CAR,
  UPDATE_CAR,
  DELETE_CAR,
  CAR_DETAILS,
  ADD_COMMENT,
} from "./cars.type";

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
  switch (action.type) {
    case ADD_CAR: {
      // Copy existing cars
      const newCars = [...state];

      // Get last car id to generate new car id
      const lastCarId = newCars[newCars.length - 1].id;

      // Add new car
      newCars.push({
        ...action.payload,
        id: lastCarId + 1,
        comments: [],
      });

      return newCars;
    }

    default:
      return state;
  }
};

export default reducer;
