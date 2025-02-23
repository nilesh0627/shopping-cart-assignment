import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAIL,
  RESET_CART,
} from "../types";
const initialState = {
  loading: false,
  response: {},
  cart: [],
  error: false,
};
export const setCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
      return { ...state, loading: true };
    case ADD_TO_CART_SUCCESS:
      const { product, response, modifyType } = action.payload;
      return {
        ...state,
        loading: false,
        response: response,
        cart: newCart(state.cart, modifyType, product),
      };
    case ADD_TO_CART_FAIL:
      return { ...state, loading: false, error: true };
    case RESET_CART:
      return { ...state, loading: false, cart: [] };
    default:
      return state;
  }
};

const newCart = (cart, modifyType, product) => {
  const quantity = modifyType === "INCREMENT" ? 1 : -1;
  const cartItem = cart.filter((item) => item.id === product.id);
  if (!cartItem?.length) return [...cart, { ...product, quantity: 1 }];
  if (cartItem[0].quantity + quantity === 0)
    return cart.filter((item) => item.id !== product.id);
  else if (cartItem[0].quantity >= 1) {
    return cart.map((item) =>
      item.id !== product.id
        ? item
        : { ...item, quantity: item.quantity + quantity }
    );
  } else return cart;
};
