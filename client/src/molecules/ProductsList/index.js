import React, { memo } from "react";
import ProductCard from "../../molecules/ProductCard";
import styled from "styled-components";
import { tablet, mobile } from "../../styles/device";
const StyledMain = styled.main`
  align-content: center;
  margin: 3rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media ${tablet} {
    grid-template-columns: repeat(2, 1fr);
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media ${mobile} {
    grid-template-columns: repeat(1, 1fr);
    padding: 3rem 1rem;
  }
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
