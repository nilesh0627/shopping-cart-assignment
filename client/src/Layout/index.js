import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
const LayoutStyles = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;
function index({ children }) {
  return (
    <>
      <Header />
      <LayoutStyles>{children}</LayoutStyles>
    </>
  );
}

export default index;
