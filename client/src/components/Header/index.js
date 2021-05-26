import React from "react";
import styled from "styled-components";
import Logo from "../../atoms/Logo";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const HeaderStyles = styled.header`
  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);

  .container {
    display: flex;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  nav {
    flex: 4;
    display: flex;
    align-self: center;
    gap: 2rem;
  }

  .cart {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    nav {
      font-size: 1.2rem;
    }

    .items {
      display: flex;
      align-items: center;
      background-color: var(--light-gray);
      padding: 1rem;
    }
  }
`;
function index() {
  return (
    <HeaderStyles>
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
          <div class="items">
            <FaShoppingCart color="#B93153" size={23} />
            <div>0 Items</div>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default index;
