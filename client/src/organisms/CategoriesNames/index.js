import React, { useEffect, memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SideBarStyled, ListItem } from "./StyledCategories";
import { getCategories } from "../../redux/actions";
import { useHistory } from "react-router";
const CategoriesNames = ({ currentCategory, setCurrentCategory }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (!categories.length) dispatch(getCategories());
  }, [dispatch]);

  const { loading, error, categories } = useSelector(
    ({ categoriesData }) => categoriesData
  );

  const setProductsCategory = (category) => {
    if (category === currentCategory) {
      setCurrentCategory("");
      history.push("/products");
    } else {
      setCurrentCategory(category);
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
