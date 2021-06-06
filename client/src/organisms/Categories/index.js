import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions";
import CategoriesList from "../../molecules/CategoriesList";
function Categories() {
  const dispatch = useDispatch();
  const { loading, error, categories } = useSelector(
    ({ categoriesData }) => categoriesData
  );
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return <CategoriesList categories={categories} />;
}

export default memo(Categories);
