import React, { memo, useEffect, useState } from "react";
import Products from "../../organisms/Products";
import CategoriesNames from "../../organisms/CategoriesNames";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { filter } from "../../utils/filter";
const ProductsLayout = styled.section`
  display: grid;
  grid-template-columns: 1.2fr 4fr;
  gap: 2rem;
`;

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
        <CategoriesNames
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
        <Products products={filteredProducts} />
      </ProductsLayout>
    </>
  );
}
export default memo(ProductsList);
