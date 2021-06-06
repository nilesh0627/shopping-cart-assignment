import React, { memo } from "react";
import ProductsList from "../../molecules/ProductsList";
const Products = ({ products }) => {
  return <ProductsList products={products} />;
};

export default memo(Products);
