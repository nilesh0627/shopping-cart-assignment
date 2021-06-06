import React, { useEffect, useState } from "react";
import Products from "../../organisms/Products";
import CategoriesNames from "../../organisms/CategoriesNames";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../../redux/actions";

const ProductsLayout = styled.section`
  display: grid;
  grid-template-columns: 1.2fr 4fr;
  gap: 2rem;
`;

function ProductsList() {
  const [filteredProducts, setFilteredProducts] = useState({});
  const [currentCategory, setCurrentCategory] = useState("");
  const dispatch = useDispatch();
  const {
    loading,
    products: allProducts,
    error,
  } = useSelector(({ productsData }) => productsData);

  useEffect(() => {
    dispatch(productsAction());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(allProducts);
  }, [allProducts]);

  useEffect(() => {
    if (!currentCategory) setFilteredProducts(allProducts);
    else {
      const filterdProductsList = allProducts.data?.filter(
        (item) => item.category === currentCategory
      );

      setFilteredProducts((products) => ({
        ...products,
        data: filterdProductsList,
      }));
    }
  }, [currentCategory]);
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

export default ProductsList;
