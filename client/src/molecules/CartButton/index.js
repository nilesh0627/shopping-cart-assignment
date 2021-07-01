import React from "react";
import Cart from "../../organisms/Cart";
import { FaShoppingCart } from "react-icons/fa";
import { StyledButton } from "./styledCartButton";
import { useCart } from "../../utils/useCart";
function CartButton({ cart }) {
  const { isCartOpen, openCart } = useCart();
  return (
    <>
      <StyledButton onClick={openCart}>
        <FaShoppingCart className="cartIcon" color="#B93153" size={23} />
        <div>{cart.length} Items</div>
      </StyledButton>
      {isCartOpen && <Cart />}
    </>
  );
}

export default CartButton;
