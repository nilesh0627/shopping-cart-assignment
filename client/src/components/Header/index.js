import React from "react";
import Logo from "../../atoms/Logo";
import { HeaderStyles } from "./HeaderStyles";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
function index() {
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
          <div className="items">
            <FaShoppingCart color="#B93153" size={23} />
            <div>0 Items</div>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default index;
