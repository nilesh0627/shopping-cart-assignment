import React from "react";
import { StyledHeader, Close } from "./StyledCartHeader";
function index({ cart, setIsOpen }) {
  return (
    <StyledHeader>
      <div>
        <strong>My Cart </strong>
        {cart.length ? <span>({cart.length} items)</span> : ""}
      </div>
      <Close onClick={() => setIsOpen(false)}>&times;</Close>
    </StyledHeader>
  );
}

export default index;
