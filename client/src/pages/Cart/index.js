import React, { memo } from "react";
import CartItems from "../../organisms/CartItems";
function Cart({ isOpen, setIsOpen }) {
  return <CartItems isOpen={isOpen} setIsOpen={setIsOpen} />;
}

export default memo(Cart);
