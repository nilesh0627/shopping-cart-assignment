import React, { useEffect, useState } from "react";
import Cart from "../pages/Cart";
import Header from "../organisms/Header";
function CartWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);
  return (
    <>
      <Header setIsOpen={setIsOpen} />
      {isOpen && <Cart isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}

export default CartWrapper;
