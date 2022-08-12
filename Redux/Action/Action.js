import * as types from "./ActionType";
import axios from "axios";

const getSubHeader = (data) => {
  return {
    type: types.GET_SUBHEADER,
    payload: data,
  };
};

const getBanner = (data) => {
  return {
    type: types.GET_BANNER,
    payload: data,
  };
};

export const getSubHeaderFunction = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:5000/menu")
      .then((res) => {
        dispatch(getSubHeader(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const getBannerFunction = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/banner")
      .then((res) => {
        dispatch(getBanner(res.data));
      })
      .catch((err) => console.log(err));
  };
};
