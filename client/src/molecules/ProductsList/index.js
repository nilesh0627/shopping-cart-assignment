import React, { memo } from "react";
import ProductCard from "../../molecules/ProductCard";
import styled from "styled-components";
const StyledMain = styled.main`
  align-content: center;
  margin: 3rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
`;
const Products = ({ products }) => {
  return (
    <StyledMain>
      {products?.data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledMain>
  );
};
export default memo(Products);
