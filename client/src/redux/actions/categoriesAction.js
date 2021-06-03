import axios from "axios";
import { BASE_URL } from "../config";
import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
} from "../types";
export function getCategories() {
  return async (dispatch) => {
    dispatch(getCategoriesRequest());
    try {
      const categories = await axios.get(`${BASE_URL}/categories`);
      dispatch(getCategoriesSuccess(categories));
    } catch (e) {
      dispatch(getCategoriesFail());
    }
  };
}

function getCategoriesRequest() {
  return {
    type: GET_CATEGORIES_REQUEST,
  };
}

function getCategoriesSuccess(categories) {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload: categories,
  };
}

function getCategoriesFail() {
  return {
    type: GET_CATEGORIES_FAIL,
  };
}
