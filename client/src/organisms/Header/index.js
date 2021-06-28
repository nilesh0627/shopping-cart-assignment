import React, { memo } from "react";
import { useSelector } from "react-redux";
import Logo from "../../molecules/Logo";
import { HeaderStyles } from "./HeaderStyles";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
function Header({ setIsOpen }) {
  const { cart } = useSelector(({ cartData }) => cartData);
  const handleCart = () => {
    setIsOpen(true);
  };
  return (
    <HeaderStyles className="shadow">
      <div className="container">
        <Logo />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
        <div className="cart">
          <nav>
            <Link to="/login">Signin</Link>
            <Link to="/register">Register</Link>
          </nav>
          <div className="items" onClick={handleCart}>
            <FaShoppingCart className="cartIcon" color="#B93153" size={23} />
            <div>{cart.length} Items</div>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default memo(Header);
