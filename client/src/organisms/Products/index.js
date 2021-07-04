import React, { useEffect, useState } from "react";
import ProductsList from "../../molecules/ProductsList";
import ProductsEmpty from "../../molecules/ProductsEmpty";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { filter } from "../../utils/filter";
import { currentCategoryAction } from "../../redux/actions/currentCategoryAction";

function Products() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products: allProducts } = useSelector(
    ({ productsData }) => productsData
  );

  const currentCategory = useSelector(({ currentCategory }) => currentCategory);

  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  useEffect(() => {
    dispatch(productsAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(currentCategoryAction(id));
    console.log(id);
  }, [dispatch, id]);

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

  if (!filteredProducts?.data?.length) return <ProductsEmpty />;
  return <ProductsList products={filteredProducts} />;
}
export default Products;
