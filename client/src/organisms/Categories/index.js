import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getCategories } from "../../redux/actions/categoriesAction";
import CategoryCard from "../../molecules/CategoryCard";
const CategoriesStyles = styled.main`
  display: grid;
  gap: 1rem;

  .fade-shadow:last-child {
    &::after {
      background: none;
    }
  }
`;
function Categories() {
  const dispatch = useDispatch();
  const { loading, error, categories } = useSelector(
    ({ categoriesData }) => categoriesData
  );
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <CategoriesStyles>
      {categories?.data?.map((category, index) => (
        <CategoryCard
          key={category.key}
          name={category.name}
          explore={category.key}
          description={category.description}
          imageUrl={category.imageUrl}
          orderType={index % 2}
        />
      ))}
    </CategoriesStyles>
  );
}

export default memo(Categories);
