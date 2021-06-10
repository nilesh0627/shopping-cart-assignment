import React, { memo } from "react";
import { ButtonStyles } from "./styledButton";
function Button({ handleClick, type, className, children }) {
  return (
    <ButtonStyles className={className} type={type} onClick={handleClick}>
      {children}
    </ButtonStyles>
  );
}

export default memo(Button);
