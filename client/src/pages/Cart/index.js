import React, { memo } from "react";
import Cart from "../../organisms/Cart";
function index({ isOpen, setIsOpen }) {
  return <Cart isOpen={isOpen} setIsOpen={setIsOpen} />;
}
export default memo(index);
