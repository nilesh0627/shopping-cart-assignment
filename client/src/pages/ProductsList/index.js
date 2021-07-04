import React from "react";
import Products from "../../organisms/Products";
import CategoriesNames from "../../organisms/CategoriesNames";
import { ProductsLayout } from "./ProductsLayout";

function ProductsList() {
  return (
    <ProductsLayout>
      <CategoriesNames />
      <Products />
    </ProductsLayout>
  );
}
export default ProductsList;
