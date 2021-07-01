import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Footer from "../organisms/Footer";
import Routes from "../routes/Routes";
import CartWrapper from "./CartWrapper";
const LayoutStyles = styled.main`
  max-width: var(--max-width);
  margin: 0 auto;
  @media (max-width: 900px) {
    display: ${(props) => (props.isOpen ? "none" : "block")};
  }
`;
function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BrowserRouter>
      <CartWrapper isOpen={isOpen} setIsOpen={setIsOpen} />
      <LayoutStyles isOpen={isOpen}>
        <Routes />
      </LayoutStyles>
      <Footer />
    </BrowserRouter>
  );
}

export default MainLayout;
