import React from "react";
import styled from "styled-components";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
const LayoutStyles = styled.main`
  max-width: var(--max-width);
  margin: 0 auto;
`;
function MainLayout({ children }) {
  return (
    <>
      <Header />
      <LayoutStyles>{children}</LayoutStyles>
      <Footer />
    </>
  );
}

export default MainLayout;
