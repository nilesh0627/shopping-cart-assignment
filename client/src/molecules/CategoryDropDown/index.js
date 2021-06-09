import React, { memo, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  Main,
  ListItem,
} from "./StyledDropDown";

function CategoryDropDown({ currentCategory, categories }) {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (categoryId, categoryName) => () => {
    setSelectedOption(categoryName);
    setIsOpen(false);
    history.push(`/products/${categoryId}`);
    console.log(selectedOption);
  };

  useEffect(() => {
    const filteredOption = categories?.data?.filter(
      (item) => item.id === currentCategory
    );
    if (filteredOption && filteredOption[0])
      setSelectedOption(filteredOption[0]?.name);
  }, [currentCategory]);

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "Select a Category"}
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
