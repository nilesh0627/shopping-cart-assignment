import React, { memo } from "react";
import { useSelector } from "react-redux";
import Cart from "../../molecules/Cart";
import { withLoader } from "../../hoc";

const WithLoader = withLoader(Cart);
function CartItems({ isOpen, setIsOpen }) {
  const { loading, response, cart, error } = useSelector(
    ({ cartData }) => cartData
  );
  return (
    <WithLoader
      loading={loading}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      cart={cart}
    />
  );
}

export default memo(CartItems);
