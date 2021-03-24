import { GET_CARS } from "./cars.type";
const INITIAL_STATE = {
  cars: [
    {
      title: "Lamborghini Gallerdo",
      price: 12340000,
      brand: "Lamborghini",
    },
  ],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CARS:
      return state.cars;

    default:
      return state;
  }
};

export default reducer;
