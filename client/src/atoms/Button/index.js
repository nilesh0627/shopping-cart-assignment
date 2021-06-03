import React from "react";
import styled from "styled-components";
const ButtonStyles = styled.button`
  border: none;
  outline: none;
  background-color: var(--primary-color);
  color: #fff;
  padding: 0.6rem 1rem;
`;
function Button({ handleClick, className, children }) {
  return (
    <ButtonStyles className={className} type="button" onClick={handleClick}>
      {children}
    </ButtonStyles>
  );
}

export default Button;
