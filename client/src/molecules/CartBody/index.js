import React from "react";
import CartItem from "../CartItem";
import { EmptyBody } from "../CartEmpty";
import { StyledBody, StyledTagLine } from "./StyledCartBody";
import Image from "../../atoms/Image";
function index({ cart }) {
  return (
    <div>
      {cart.length ? (
        <StyledBody>
          {cart.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
          <StyledTagLine>
            <Image
              width="80"
              source="/static/images/lowest-price.png"
              alt="Lowest Price Guranteed Logo"
            />
            <figcaption>You won't find it cheaper anywhere.</figcaption>
          </StyledTagLine>
        </StyledBody>
      ) : (
        <EmptyBody />
      )}
    </div>
  );
}

export default index;
