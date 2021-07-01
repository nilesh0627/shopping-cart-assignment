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
  const isPageWide = useDimensions("(min-width: 600px)");
  return (
    <>
      {isPageWide && (
        <CategorySidebar
          currentCategory={currentCategory}
          categories={categories}
        />
      )}
      {!isPageWide && (
        <CategoryDropDown
          currentCategory={currentCategory}
          categories={categories}
        />
      )}
    </>
  );
};

export default memo(CategoriesNames);
