import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Footer from "../organisms/Footer";
import Routes from "../routes/Routes";
import Cart from "../pages/Cart";
import Header from "../organisms/Header";
import { useDimensions } from "../utils/useDimensions";
const LayoutStyles = styled.main`
  max-width: var(--max-width);
  margin: 0 auto;
`;
function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const windowDimensions = useDimensions();
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);
  return (
    <BrowserRouter>
      <Header setIsOpen={setIsOpen} />
      {isOpen && <Cart isOpen={isOpen} setIsOpen={setIsOpen} />}
      {isOpen && windowDimensions.width <= 900 ? null : (
        <LayoutStyles>
          <Routes />
        </LayoutStyles>
      )}
      <Footer />
    </BrowserRouter>
  );
}

export default memo(MainLayout);
