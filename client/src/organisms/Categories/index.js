import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions";
import CategoriesList from "../../molecules/CategoriesList";
import { withLoader } from "../../hoc";

const WithLoader = withLoader(CategoriesList);

function Categories() {
  const dispatch = useDispatch();
  const { loading, error, categories } = useSelector(
    ({ categoriesData }) => categoriesData
  );
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return <WithLoader loading={loading} categories={categories} />;
}

export default memo(Categories);
