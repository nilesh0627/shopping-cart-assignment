import React, { memo } from "react";
import { StyledHeader, Close } from "./StyledCartHeader";
import { CgClose } from "react-icons/cg";
import { useCart } from "../../utils/useCart";
function CartHeader({ cart }) {
  const { closeCart } = useCart();
  return (
    <StyledHeader>
      <article>
        <h2>My Cart </h2>
        <div>{cart.length ? <span>({cart.length} items)</span> : ""}</div>
      </article>
      <Close onClick={closeCart}>
        <CgClose size={18} />
      </Close>
    </StyledHeader>
  );
}

export default memo(CartHeader);
