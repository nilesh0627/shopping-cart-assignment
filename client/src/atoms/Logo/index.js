import React from "react";
import styled from "styled-components";
import Image from "../image";
const LogoStyles = styled.figure`
  flex: 1.2;
  img {
    max-width: 14rem;
  }
`;
function index() {
  return (
    <LogoStyles>
      <Image source="/static/images/logo.png" alt="SABKA BAZAR LOGO" />
    </LogoStyles>
  );
}

export default index;
