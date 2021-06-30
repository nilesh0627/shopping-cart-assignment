import React, { memo } from "react";
import CartDesktop from "../../organisms/CartDesktop";
import CartTablet from "../../organisms/CartTablet";
import { useDimensions } from "../../utils/useDimensions";
function Cart({ isOpen, setIsOpen }) {
  const windowDimensions = useDimensions();
  return (
    <>
      {windowDimensions.width > 900 && (
        <CartDesktop isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
      {windowDimensions.width <= 900 && (
        <CartTablet isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </>
  );
}

export default memo(Cart);
