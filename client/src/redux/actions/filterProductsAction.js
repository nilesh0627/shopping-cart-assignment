import { FILTER_PRODUCTS } from "../types";
export const filterProductsAction = (category) => {
  return {
    type: FILTER_PRODUCTS,
    payload: category,
  };
};
