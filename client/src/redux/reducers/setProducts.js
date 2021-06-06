import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  FILTER_PRODUCTS,
} from "../types";
const initialState = {
  loading: false,
  products: {},
  error: false,
};
export function setProducts(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case GET_PRODUCTS_FAIL:
      return { ...state, loading: false, error: true };
    // case FILTER_PRODUCTS:
    //   return {
    //     ...state,
    //     loading: false,
    //     products: {
    //       ...state.products,
    //       data: state.products.data?.filter(
    //         (item) => item.category === action.payload
    //       ),
    //     },
    //   };

    default:
      return state;
  }
}
