import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions";
import CategorySidebar from "../../molecules/CategorySidebar";
const CategoriesNames = ({ currentCategory }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!categories.length) dispatch(getCategories());
  }, [dispatch]);

  const { loading, error, categories } = useSelector(
    ({ categoriesData }) => categoriesData
  );

  return (
    <CategorySidebar
      currentCategory={currentCategory}
      categories={categories}
    />
  );
};

export default memo(CategoriesNames);
