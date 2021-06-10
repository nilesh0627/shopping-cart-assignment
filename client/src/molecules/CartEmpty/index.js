import React from "react";
import { StyledEmptyBody, StyledFooter } from "./styledCartEmpty";
import { useHistory } from "react-router-dom";
import Button from "../../atoms/Button";
const EmptyBody = () => {
  return (
    <StyledEmptyBody>
      <h3>No Items in your Cart</h3>
      <p>Your Favorite item are just one click away.</p>
    </StyledEmptyBody>
  );
};

const EmptyFooter = ({ setIsOpen }) => {
  const history = useHistory();
  const startShopping = () => {
    history.push("/products");
    setIsOpen(false);
  };
  return (
    <StyledFooter>
      <Button handleClick={startShopping}>Start Shopping</Button>
    </StyledFooter>
  );
};

export { EmptyBody, EmptyFooter };
