import { combineReducers } from "redux";
import flipkartReducer from "./Reducer";

const rootReducer = combineReducers({
  flipkart: flipkartReducer,
});

export default rootReducer;
