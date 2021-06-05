import React from "react";
import styled from "styled-components";
const ButtonStyles = styled.button`
  border: none;
  outline: none;
  background-color: var(--primary-color);
  color: var(--white);
  padding: 0.6rem 1rem;
  cursor: pointer;
`;
function Button({ handleClick, type, className, children }) {
  return (
    <ButtonStyles className={className} type={type} onClick={handleClick}>
      {children}
    </ButtonStyles>
  );
}

export default Button;
