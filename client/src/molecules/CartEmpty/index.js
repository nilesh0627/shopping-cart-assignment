import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Button from "../../atoms/Button";
const StyledEmptyBody = styled.main`
  display: grid;
  text-align: center;
  gap: 1.2rem;
  align-content: center;
  justify-content: center;
  height: 70vh;
  max-height: calc(100vh - 18rem);
`;

const StyledFooter = styled.footer`
  position: sticky;
  left: 0;
  bottom: 0;
  padding: 1rem;
  button {
    text-align: center;
    width: 100%;
    border-radius: 0.3rem;
    padding: 1rem;
  }
`;
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
