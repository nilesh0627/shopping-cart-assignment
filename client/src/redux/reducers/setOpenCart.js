import { OPEN_CART_REQUEST, CLOSE_CART_REQUEST } from "../types";
const isOpen = false;
export function setOpenCart(state = isOpen, action) {
  switch (action.type) {
    case OPEN_CART_REQUEST:
      return true;
    case CLOSE_CART_REQUEST:
      return false;
    default:
      return state;
  }
}
