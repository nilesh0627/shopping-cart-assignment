import { Axios } from "../config";
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
} from "../types";

export const productsAction = () => {
  return async (dispatch) => {
    dispatch(productsRequest());
    try {
      const productsData = await Axios.get(`/ProductsJSONServer/products`);
      dispatch(productsSuccess(productsData));
    } catch (e) {
      dispatch(productsFail());
    }
  };
};

const productsRequest = () => ({ type: GET_PRODUCTS_REQUEST });

const productsSuccess = (productsData) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: productsData,
});

const productsFail = () => ({
  type: GET_PRODUCTS_FAIL,
});
