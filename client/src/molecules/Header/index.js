import React, { memo, useCallback } from "react";
import Logo from "../../molecules/Logo";
import { HeaderStyles } from "./HeaderStyles";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
function Header({ setIsOpen, cart }) {
  const openCart = useCallback(() => setIsOpen(true), [setIsOpen]);
  const closeCart = useCallback(() => setIsOpen(false), [setIsOpen]);
  return (
    <HeaderStyles className="shadow">
      <div className="container">
        <Logo closeCart={closeCart} />
        <nav>
          <Link to="/" onClick={closeCart}>
            Home
          </Link>
          <Link to="/products" onClick={closeCart}>
            Products
          </Link>
        </nav>
        <div className="cart">
          <nav>
            <Link to="/login" onClick={closeCart}>
              Signin
            </Link>
            <Link to="/register" onClick={closeCart}>
              Register
            </Link>
          </nav>
          <div className="items" onClick={openCart}>
            <FaShoppingCart className="cartIcon" color="#B93153" size={23} />
            <div>{cart.length} Items</div>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default memo(Header);
