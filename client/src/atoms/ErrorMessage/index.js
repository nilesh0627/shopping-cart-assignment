import React from "react";
import styled from "styled-components";

const StyledError = styled.div`
  color: var(--red);
  margin-top: 1rem;
`;
const index = ({ type, field, minLength, maxLength }) => {
  const errorMessage = () => {
    switch (type) {
      case "required":
        return `This is mandatory field`;
      case "pattern":
        return `Please enter valid ${field}`;
      case "minLength":
        return `${field} must be of atleast ${minLength} characters`;
      case "maxLength":
        return `${field} must be of atmost ${maxLength} characters`;
      default:
        return null;
    }
  };

  return <StyledError>{errorMessage()}</StyledError>;
};

export default index;
