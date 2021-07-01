import React from "react";
import CartHeader from "../../molecules/CartHeader";
import CartBody from "../../molecules/CartBody";
import CartFooter from "../../molecules/CartFooter";
import { StyledCartModal } from "./styledCart";
import { useCart } from "../../utils/useCart";
function Cart({ cart, amount, checkout }) {
  const { isCartOpen } = useCart();
  return (
    <StyledCartModal isOpen={isCartOpen}>
      <CartHeader cart={cart} />
      <CartBody cart={cart} />
      <CartFooter cart={cart} checkout={checkout} amount={amount} />
    </StyledCartModal>
  );
}

export default Cart;
