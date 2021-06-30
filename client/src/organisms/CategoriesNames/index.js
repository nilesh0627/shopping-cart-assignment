import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions";
import CategorySidebar from "../../molecules/CategorySidebar";
import CategoryDropDown from "../../molecules/CategoryDropDown";
import { useDimensions } from "../../utils/useDimensions";
const CategoriesNames = ({ currentCategory }) => {
  const { categories } = useSelector(({ categoriesData }) => categoriesData);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!categories.length) dispatch(getCategories());
  }, [dispatch, categories.length]);
  const windowDimensions = useDimensions();
  return (
    <>
      {windowDimensions.width > 600 && (
        <CategorySidebar
          currentCategory={currentCategory}
          categories={categories}
        />
      )}

      {windowDimensions.width <= 600 && (
        <CategoryDropDown
          currentCategory={currentCategory}
          categories={categories}
        />
      )}
    </>
  );
};

export default memo(CategoriesNames);
