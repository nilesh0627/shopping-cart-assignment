import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Footer from "../organisms/Footer";
import Routes from "../routes/Routes";
import CartWrapper from "./CartWrapper";
const LayoutStyles = styled.main`
  max-width: var(--max-width);
  margin: 0 auto;
`;
function MainLayout() {
  return (
    <BrowserRouter>
      <CartWrapper />
      <LayoutStyles>
        <Routes />
      </LayoutStyles>
      <Footer />
    </BrowserRouter>
  );
}

export default MainLayout;
