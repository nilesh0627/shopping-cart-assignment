import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions";
import CategorySidebar from "../../molecules/CategorySidebar";
import CategoryDropDown from "../../molecules/CategoryDropDown";
import { useDimensions } from "../../utils/useDimensions";
const CategoriesNames = () => {
  const { categories } = useSelector(({ categoriesData }) => categoriesData);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!categories.length) dispatch(getCategories());
  }, [dispatch, categories.length]);
  const isPageWide = useDimensions("(min-width: 600px)");
  return (
    <>
      {isPageWide && <CategorySidebar categories={categories} />}
      {!isPageWide && <CategoryDropDown categories={categories} />}
    </>
  );
};

export default CategoriesNames;
