import React, { memo } from "react";
import Button from "../../atoms/Button";
import { EmptyFooter } from "../CartEmpty";
import { StyledFooter } from "./StyledCartFooter";
function index({ cart, checkout, amount }) {
  return (
    <>
      {cart.length ? (
        <StyledFooter>
          <div>Promo code can be applied on payment page</div>
          <Button handleClick={checkout}>
            <div>Proceed To checkout</div>
            <div>Rs. {amount}</div>
          </Button>
        </StyledFooter>
      ) : (
        <EmptyFooter />
      )}
    </>
  );
}

export default memo(index);
