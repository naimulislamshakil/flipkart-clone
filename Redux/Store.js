import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./Reducer/Root-Reducer";

const middleares = [thunk];
if (process.env.NODE_ENV === "development") {
  middleares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleares));

export default store;
