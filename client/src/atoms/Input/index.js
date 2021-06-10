import React, { memo, useState } from "react";
import { FieldSet } from "./styledInput";
function Input({ type, name, validate, register, validation, placeholder }) {
  const [show, setShow] = useState(false);
  const showLabel = () => setShow(true);
  const hideLabel = () => setShow(false);
  return (
    <FieldSet show={show}>
      <label htmlFor={name}>{placeholder}</label>
      <input
        type={type}
        id={name}
        {...register(name, { ...validation, validate: validate })}
        placeholder={placeholder}
        onFocus={showLabel}
        onBlur={hideLabel}
        autoComplete="off"
      />
    </FieldSet>
  );
}

export default memo(Input);
