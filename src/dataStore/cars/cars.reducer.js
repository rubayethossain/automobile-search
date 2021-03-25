import {
  ADD_CAR,
  UPDATE_CAR,
  DELETE_CAR,
  CAR_DETAILS,
  ADD_COMMENT,
} from "./cars.type";

const INITIAL_STATE = [
  {
    title: "Lamborghini Gallerdo",
    price: 12340000,
    brand: "Lamborghini",
    comment: [
      {
        text: "Lorem ipsum dolor sit.",
        author: "Mr. X",
      },
    ],
  },
];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
