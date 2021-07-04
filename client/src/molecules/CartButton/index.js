import React, { useEffect, memo } from "react";
import Cart from "../../organisms/Cart";
import { FaShoppingCart } from "react-icons/fa";
import { StyledButton } from "./styledCartButton";
import { useCart } from "../../utils/useCart";
function CartButton({ cart }) {
  const { isCartOpen, openCart } = useCart();
  useEffect(() => {
    isCartOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isCartOpen]);
  return (
    <>
      <StyledButton onClick={openCart}>
        <FaShoppingCart className="cartIcon" color="#B93153" size={23} />
        <div>{cart.length} Items</div>
      </StyledButton>
      {isCartOpen && <Cart isCartOpen={isCartOpen} />}
    </>
  );
}

export default memo(CartButton);
