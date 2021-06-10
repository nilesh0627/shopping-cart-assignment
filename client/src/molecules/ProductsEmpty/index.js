import React, { memo } from "react";
import { StyledMain } from "./styledProductsEmpty";
const index = () => {
  return (
    <StyledMain>
      <h2>Sorry!! No Products Found for Selected Category</h2>
    </StyledMain>
  );
};

export default memo(index);
