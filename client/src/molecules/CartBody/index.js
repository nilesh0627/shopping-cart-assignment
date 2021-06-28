import React from "react";
import CartItem from "../CartItem";
import { EmptyBody } from "../CartEmpty";
import { StyledBody } from "./StyledCartBody";
function index({ cart }) {
  return (
    <div>
      {cart.length ? (
        <StyledBody>
          {cart.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </StyledBody>
      ) : (
        <EmptyBody />
      )}
    </div>
  );
}

export default index;
