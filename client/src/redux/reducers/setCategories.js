import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
} from "../types";
const initialState = {
  loading: false,
  categories: {},
  error: false,
};
export function setCategories(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST:
      return { ...state, loading: true };
    case GET_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload, loading: false };
    case GET_CATEGORIES_FAIL:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
