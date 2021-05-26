import React from "react";
import styled from "styled-components";

const LogoStyles = styled.h1`
  font-size: 2.5rem;
  flex: 1.5;
`;
function index() {
  return (
    <LogoStyles>
      <div>SABKA</div>
      <div>BAZAR</div>
    </LogoStyles>
  );
}

export default index;
