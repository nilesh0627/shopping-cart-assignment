import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { reduce } from "../../utils/reduce";
import { resetCart } from "../../redux/actions";
import Cart from "../../molecules/Cart";
import { useCart } from "../../utils/useCart";
function CartItems() {
  const { cart } = useSelector(({ cartData }) => cartData);
  const history = useHistory();
  const dispatch = useDispatch();
  const { closeCart } = useCart();
  const amount = reduce(cart, 0);
  const checkout = () => {
    closeCart();
    dispatch(resetCart());
    history.push("/");
  };

  return <Cart cart={cart} amount={amount} checkout={checkout} />;
}

export default memo(CartItems);
