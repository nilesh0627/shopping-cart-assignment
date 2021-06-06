import axios from "axios";
import { BASE_URL } from "../config";
import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAIL,
} from "../types";
export const addToCart = (product, modifyType) => {
  const requestBody = {
    id: product.id,
  };
  return async (dispatch) => {
    dispatch(addToCartRequest());
    try {
      // const response = await axios.post(`${BASE_URL}/addToCart`, requestBody);
      const response = "Product added successfully";
      dispatch(addToCartSuccess(product, modifyType, response));
    } catch (e) {
      dispatch(addToCartFail());
    }
  };
};
const addToCartRequest = () => ({ type: ADD_TO_CART_REQUEST });
const addToCartSuccess = (product, modifyType, response) => ({
  type: ADD_TO_CART_SUCCESS,
  payload: {
    product,
    response,
    modifyType,
  },
});
const addToCartFail = () => ({ type: ADD_TO_CART_FAIL });
