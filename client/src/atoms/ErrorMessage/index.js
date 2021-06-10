import React, { memo } from "react";
import { StyledError } from "./styledError";
import { BiError } from "react-icons/bi";
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

export default memo(index);
