import React, { memo, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  Main,
  ListItem,
} from "./StyledDropDown";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

function CategoryDropDown({ categories }) {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const currentCategory = useSelector(({ currentCategory }) => currentCategory);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (categoryId, categoryName) => () => {
    setSelectedOption(categoryName);
    setIsOpen(false);
    history.push(`/products/${categoryId}`);
    console.log(selectedOption);
  };

  useEffect(() => {
    const filteredOption = categories?.data?.find(
      (item) => item.id === currentCategory
    );
    if (filteredOption) setSelectedOption(filteredOption?.name);

    return () => setSelectedOption(null);
  }, [categories?.data, currentCategory]);

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "Select a Category"}{" "}
          {isOpen ? <AiFillCaretUp size={20} /> : <AiFillCaretDown size={20} />}
        </DropDownHeader>
        {isOpen && (
          <DropDownList>
            {categories?.data?.map(({ id, name }) => (
              <ListItem onClick={onOptionClicked(id, name)} key={id}>
                {name}
              </ListItem>
            ))}
          </DropDownList>
        )}
      </DropDownContainer>
    </Main>
  );
}

export default memo(CategoryDropDown);
