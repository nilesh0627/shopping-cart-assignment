import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../organisms/Footer";
import Routes from "../routes/Routes";
import Header from "../organisms/Header";
import { LayoutStyles } from "./StyledLayout";
function MainLayout() {
  return (
    <BrowserRouter>
      <Header />
      <LayoutStyles>
        <Routes />
      </LayoutStyles>
      <Footer />
    </BrowserRouter>
  );
}

export default MainLayout;
