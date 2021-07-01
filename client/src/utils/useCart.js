import { useDispatch, useSelector } from "react-redux";
import {
  closeCartAction,
  openCartAction,
} from "../redux/actions/openCartAction";

export function useCart() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(({ isCartOpen }) => isCartOpen);
  const openCart = () => dispatch(openCartAction());
  const closeCart = () => dispatch(closeCartAction());
  return { isCartOpen, openCart, closeCart };
}
