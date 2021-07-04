import React, { memo } from "react";
import Logo from "../../molecules/Logo";
import { HeaderStyles } from "./HeaderStyles";
import { Link } from "react-router-dom";
import CartButton from "../CartButton";
import { useCart } from "../../utils/useCart";
function Header({ cart }) {
  const { closeCart } = useCart();
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
          <CartButton cart={cart} />
        </div>
      </div>
    </HeaderStyles>
  );
}

export default memo(Header);
