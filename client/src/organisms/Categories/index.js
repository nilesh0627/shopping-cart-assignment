import React, { useEffect } from "react";
import { connect } from "react-redux";
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
function Categories({ categories, getCategories }) {
  useEffect(() => {
    getCategories();
  }, []);

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

function mapStateToProps({ categoriesData }) {
  const { loading, error, categories } = categoriesData;
  return {
    loading,
    error,
    categories,
  };
}

const mapDispatchToProps = {
  getCategories: getCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
