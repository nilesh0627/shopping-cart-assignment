import React from "react";
import styled from "styled-components";
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const index = () => {
  return (
    <StyledMain>
      <h2>Sorry!! No Products Found for Selected Category</h2>
    </StyledMain>
  );
};

export default index;
