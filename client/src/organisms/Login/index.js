import React from "react";
import styled from "styled-components";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import AuthenticationLayout from "../../templates/AuthenticationLayout";
import { useForm } from "../../utils/useForm";
const LoginButton = styled(Button)`
  display: block;
  width: 100%;
  margin-top: 2.3rem;
`;

function Login() {
  const { inputs, handleChange } = useForm({
    email: "",
    password: "",
  });
  return (
    <AuthenticationLayout
      title="Login"
      summary="Get Access to your Orders,Wishlist and Recommendations"
    >
      <form>
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
        <LoginButton type="submit">Login</LoginButton>
      </form>
    </AuthenticationLayout>
  );
}

export default Login;
