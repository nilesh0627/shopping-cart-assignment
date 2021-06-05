import React from "react";
import styled from "styled-components";
import AuthenticationLayout from "../../templates/AuthenticationLayout";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { useForm } from "../../utils/useForm";
const SignupButton = styled(Button)`
  display: block;
  width: 100%;
  margin-top: 2.3rem;
`;

function Register() {
  const { inputs, handleChange } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <AuthenticationLayout
      title="Signup"
      summary="We don't share your personal details with anyone"
    >
      <form>
        <Input
          type="text"
          name="firstName"
          value={inputs["firstName"]}
          placeholder="First Name"
          handleChange={handleChange}
        />
        <Input
          type="text"
          name="lastName"
          value={inputs["lastName"]}
          placeholder="Last Name"
          handleChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          value={inputs["email"]}
          placeholder="Email"
          handleChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          value={inputs["password"]}
          placeholder="Password"
          handleChange={handleChange}
        />
        <Input
          type="password"
          name="confirmPassword"
          value={inputs["confirmPassword"]}
          placeholder="Confirm Password"
          handleChange={handleChange}
        />

        <SignupButton type="submit">Signup</SignupButton>
      </form>
    </AuthenticationLayout>
  );
}

export default Register;
