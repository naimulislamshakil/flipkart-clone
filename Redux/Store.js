import { createStore, applyMiddleware } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./Reducer/Root-Reducer";

const middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
