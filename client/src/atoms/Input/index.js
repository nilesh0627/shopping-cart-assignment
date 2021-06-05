import React from "react";
import styled from "styled-components";

const FieldSet = styled.fieldset`
  margin-top: 1rem;
  border: none;
  font-size: 1.3rem;
  label {
    display: block;
    visibility: hidden;
    position: relative;
    bottom: 5.5rem;
    color: var(--blue);
    font-weight: 500;
  }
  input {
    display: block;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--gray);
    padding: 1rem 0;
  }

  input:focus {
    border-bottom: 2px solid var(--blue);
  }

  input:focus + label,
  input:valid + label {
    visibility: visible;
  }
`;
function Input({ type, name, value, placeholder, handleChange }) {
  return (
    <FieldSet>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        required
        autoComplete="off"
      />
      <label for={name}>{placeholder}</label>
    </FieldSet>
  );
}

export default Input;
