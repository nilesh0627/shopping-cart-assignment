import React, { memo } from "react";
import ProductsList from "../../molecules/ProductsList";
import ProductsEmpty from "../../molecules/ProductsEmpty";
const Products = ({ products }) => {
  if (!products?.data?.length) return <ProductsEmpty />;
  return <ProductsList products={products} />;
};

export default memo(Products);
