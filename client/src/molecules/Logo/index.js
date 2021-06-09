import React from "react";
import styled from "styled-components";
import Image from "../../atoms/image";
import { Link } from "react-router-dom";
import { mobile } from "../../styles/device";
const LogoStyles = styled.figure`
  flex: 1.2;
  img {
    max-width: 14rem;

    @media ${mobile} {
      max-width: 8rem;
    }
  }
`;
function index() {
  return (
    <LogoStyles>
      <Link to="/">
        <Image source="/static/images/logo.png" alt="SABKA BAZAR LOGO" />
      </Link>
    </LogoStyles>
  );
}

export default index;
