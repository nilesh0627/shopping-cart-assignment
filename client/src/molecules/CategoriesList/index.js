import React, { memo } from "react";
import { CategoriesStyles } from "./StyledCategoriesList";
import CategoryCard from "../../molecules/CategoryCard";

function CategoriesList({ categories }) {
  return (
    <CategoriesStyles>
      {categories?.data?.map((category, index) => (
        <CategoryCard
          key={category.id}
          id={category.id}
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

export default memo(CategoriesList);
