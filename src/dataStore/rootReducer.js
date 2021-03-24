import { combineReducers } from "redux";
import carsReducer from "./cars/cars.reducer";

const rootReducer = combineReducers({
  automobiles: carsReducer,
});

export default rootReducer;
