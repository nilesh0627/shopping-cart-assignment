import React, { memo, useState } from "react";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  Main,
  ListItem,
} from "./StyledDropDown";

function CategoryDropDown({ list }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "Select a Category"}
        </DropDownHeader>
        {isOpen && (
          <DropDownList>
            {list.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        )}
      </DropDownContainer>
    </Main>
  );
}

export default memo(CategoryDropDown);
