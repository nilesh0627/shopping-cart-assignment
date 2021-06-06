import React from "react";
import { useSelector } from "react-redux";
import Cart from "../../molecules/Cart";
function CartItems({ isOpen, setIsOpen }) {
  const { loading, response, cart, error } = useSelector(
    ({ cartData }) => cartData
  );
  return <Cart isOpen={isOpen} setIsOpen={setIsOpen} cart={cart} />;
}

export default CartItems;
