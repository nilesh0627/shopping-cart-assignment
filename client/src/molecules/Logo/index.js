import React, { memo } from "react";
import Image from "../../atoms/Image";
import { Link } from "react-router-dom";
import { LogoStyles } from "./styledLogo";
function index() {
  return (
    <LogoStyles>
      <Link to="/">
        <Image source="/static/images/logo.png" alt="SABKA BAZAR LOGO" />
      </Link>
    </LogoStyles>
  );
}

export default memo(index);
