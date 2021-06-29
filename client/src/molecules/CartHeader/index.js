import React from "react";
import { StyledHeader, Close } from "./StyledCartHeader";
import { CgClose } from "react-icons/cg";
function index({ cart, setIsOpen }) {
  return (
    <StyledHeader>
      <div>
        <strong>My Cart </strong>
        {cart.length ? <span>({cart.length} items)</span> : ""}
      </div>
      {window.innerWidth > 900 && (
        <Close onClick={() => setIsOpen(false)}>
          <CgClose size={18} />
        </Close>
      )}
    </StyledHeader>
  );
}

export default index;
