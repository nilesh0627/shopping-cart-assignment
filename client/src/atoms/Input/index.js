import React, { useState } from "react";
import styled, { css } from "styled-components";

const FieldSet = styled.fieldset`
  margin-top: 3rem;
  border: none;
  font-size: 1.3rem;

  label {
    display: none;
  }

  ${({ show }) =>
    show &&
    css`
      label {
        display: block;
        color: var(--blue);
        font-weight: 500;
      }
      input:focus {
        border-bottom: 2px solid var(--blue);
      }
    `}

  input {
    display: block;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--gray);
    padding: 1rem 0;
  }

  /* label + input:focus +,
  label + input:valid {
    display: block;
  } */
`;
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

export default Input;
