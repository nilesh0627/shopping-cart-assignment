import React, { memo } from "react";
import ProductCard from "../../molecules/ProductCard";
import { StyledMain } from "./styledProductsList";
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
