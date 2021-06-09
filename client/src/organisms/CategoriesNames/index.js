import React, { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions";
import CategorySidebar from "../../molecules/CategorySidebar";
import CategoryDropDown from "../../molecules/CategoryDropDown";
const CategoriesNames = ({ currentCategory }) => {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };
  const dispatch = useDispatch();
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    if (!categories.length) dispatch(getCategories());
  }, [dispatch]);

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { loading, error, categories } = useSelector(
    ({ categoriesData }) => categoriesData
  );

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
