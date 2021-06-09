import React, { memo, useEffect, useState } from "react";
import Products from "../../organisms/Products";
import CategoriesNames from "../../organisms/CategoriesNames";
import { ProductsLayout } from "./ProductsLayout";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { filter } from "../../utils/filter";

function ProductsList() {
  const { id } = useParams();
  const [currentCategory, setCurrentCategory] = useState(id);
  const dispatch = useDispatch();
  const {
    loading,
    products: allProducts,
    error,
  } = useSelector(({ productsData }) => productsData);

  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  useEffect(() => {
    dispatch(productsAction());
  }, [dispatch]);

  useEffect(() => {
    console.log(id);
    setCurrentCategory(id);
  }, [id]);

  useEffect(() => {
    if (allProducts) {
      if (currentCategory) {
        const filterdProductsList = filter(allProducts?.data, currentCategory);
        setFilteredProducts((products) => ({
          ...products,
          data: filterdProductsList,
        }));
      } else {
        setFilteredProducts(allProducts);
      }
    }
  }, [allProducts, currentCategory]);
  return (
    <>
      <ProductsLayout>
        <CategoriesNames currentCategory={currentCategory} />
        <Products products={filteredProducts} />
      </ProductsLayout>
    </>
  );
}
export default memo(ProductsList);
