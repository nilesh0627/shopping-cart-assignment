import React from "react";
import { StyledHeader, Close } from "./StyledCartHeader";
import { CgClose } from "react-icons/cg";
import { useCart } from "../../utils/useCart";
function CartHeader({ cart }) {
  const { closeCart } = useCart();
  return (
    <StyledHeader>
      <div>
        <strong>My Cart </strong>
        {cart.length ? <span>({cart.length} items)</span> : ""}
      </div>
      <Close onClick={closeCart}>
        <CgClose size={18} />
      </Close>
    </StyledHeader>
  );
}

export default CartHeader;
