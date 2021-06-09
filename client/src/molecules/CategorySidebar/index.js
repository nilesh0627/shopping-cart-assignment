import React, { memo } from "react";
import { SideBarStyled, ListItem } from "./StyledCategories";
import { useHistory } from "react-router";
const CategoriesNames = ({ currentCategory, categories }) => {
  const history = useHistory();
  const setProductsCategory = (category) => {
    if (category === currentCategory) {
      history.push("/products");
    } else {
      history.push(`/products/${category}`);
    }
  };
  return (
    <SideBarStyled>
      <ul>
        {categories?.data?.map(({ id, name }) => (
          <ListItem
            key={id}
            onClick={() => setProductsCategory(id)}
            category={currentCategory}
            id={id}
          >
            {name}
          </ListItem>
        ))}
      </ul>
    </SideBarStyled>
  );
};

export default memo(CategoriesNames);
