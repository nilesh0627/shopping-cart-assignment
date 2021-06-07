import React, { memo, useEffect, useState } from "react";
import Products from "../../organisms/Products";
import CategoriesNames from "../../organisms/CategoriesNames";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../../redux/actions";
import { withRouter } from "react-router-dom";
import { filter } from "../../utils/filter";
const ProductsLayout = styled.section`
  display: grid;
  grid-template-columns: 1.2fr 4fr;
  gap: 2rem;
`;

function ProductsList({ location }) {
  const [currentCategory, setCurrentCategory] = useState(
    location?.state?.category
  );
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

  // useEffect(() => {
  //   if (location?.state?.category) {
  //     const newCategory = location.state.category;
  //     setCurrentCategory(newCategory);
  //   }
  // }, []);

  useEffect(() => {
    if (allProducts) {
      if (location.state?.category) {
        const filterdProductsList = filter(allProducts?.data, currentCategory);
        setFilteredProducts((products) => ({
          ...products,
          data: filterdProductsList,
        }));
      } else {
        setFilteredProducts(allProducts);
      }
    }
  }, [allProducts]);

  useEffect(() => {
    if (allProducts["data"]) {
      if (!currentCategory) setFilteredProducts(allProducts);
      else {
        const filterdProductsList = filter(allProducts?.data, currentCategory);
        setFilteredProducts((products) => ({
          ...products,
          data: filterdProductsList,
        }));
      }
    }
  }, [currentCategory]);
  console.log(filteredProducts);
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
export default withRouter(ProductsList);
