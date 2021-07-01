import { OPEN_CART_REQUEST, CLOSE_CART_REQUEST } from "../types";
export function openCartAction() {
  return {
    type: OPEN_CART_REQUEST,
  };
}

export function closeCartAction() {
  return {
    type: CLOSE_CART_REQUEST,
  };
}
