import React from "react";
import styled from "styled-components";
import { BiError } from "react-icons/bi";
const StyledError = styled.div`
  color: var(--red);
  display: flex;
  align-items: center;
  margin-top: 1rem;
  > * {
    margin-right: 0.8rem;
  }
`;
const index = ({ type, field, message, minLength, maxLength }) => {
  const errorMessage = () => {
    switch (type) {
      case "required":
        return `This is mandatory field`;
      case "pattern":
        if (field === "Password")
          return `The ${field} must contain atleast 1 number and 1 alphabet`;
        else return `Please enter valid ${field}`;
      case "minLength":
        return `${field} must be of atleast ${minLength} characters`;
      case "maxLength":
        return `${field} must be of atmost ${maxLength} characters`;
      case "validate":
        return message;
      default:
        return null;
    }
  };

  return (
    <StyledError>
      <BiError size={22} color="red" />
      {errorMessage()}
    </StyledError>
  );
};

export default index;
