import * as types from "../Action/ActionType";

const intialState = {
  subheaders: [],
};

const flipkartReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.GET_SUBHEADER:
      return {
        ...state,
        subheaders: action.payload,
      };

    case types.GET_BANNER:
      return {
        ...state,
        banners: action.payload,
      };

    default:
      return state;
  }
};

export default flipkartReducer;
