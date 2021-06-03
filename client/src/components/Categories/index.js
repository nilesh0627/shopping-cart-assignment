import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getCategories } from "../../redux/actions/categoriesAction";
import Category from "./Category";
const CategoriesStyles = styled.main`
  display: grid;
  gap: 1rem;
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
        <Category
          key={category.key}
          name={category.name}
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
