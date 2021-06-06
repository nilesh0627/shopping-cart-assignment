import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Routes from "../routes/Routes";
import Cart from "../pages/Cart";
const LayoutStyles = styled.main`
  max-width: var(--max-width);
  margin: 0 auto;
`;
function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BrowserRouter>
      <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header setIsOpen={setIsOpen} />
      <LayoutStyles>
        <Routes />
      </LayoutStyles>
      <Footer />
    </BrowserRouter>
  );
}

export default MainLayout;
