import React, { memo } from "react";
import { SideBarStyled, ListItem } from "./StyledCategories";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { currentCategoryAction } from "../../redux/actions/currentCategoryAction";
const CategoriesNames = ({ categories }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentCategory = useSelector(({ currentCategory }) => currentCategory);
  const setProductsCategory = (category) => {
    dispatch(currentCategoryAction(category));
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
