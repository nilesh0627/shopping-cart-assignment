import React from "react";
import styled from "styled-components";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import AuthenticationLayout from "../../templates/AuthenticationLayout";
import ErrorMessage from "../../atoms/ErrorMessage";
import { emailValidation, passwordValidation } from "../../utils/validation";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
const LoginButton = styled(Button)`
  display: block;
  width: 100%;
  margin-top: 2.3rem;
`;

const StyledForm = styled.form``;

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const history = useHistory();

  const onSubmit = () => {
    history.push("/");
  };
  return (
    <AuthenticationLayout
      title="Login"
      summary="Get Access to your Orders,Wishlist and Recommendations"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          name="email"
          register={register}
          validation={emailValidation}
          placeholder="Email"
        />
        {errors.email && (
          <ErrorMessage
            field="Email"
            type={errors.email.type}
            minLength={emailValidation.minLength}
            maxLength={emailValidation.maxLength}
          />
        )}
        <Input
          type="password"
          name="password"
          register={register}
          validation={passwordValidation}
          placeholder="Password"
        />
        {errors.password && (
          <ErrorMessage
            field="Password"
            type={errors.password.type}
            minLength={passwordValidation.minLength}
            maxLength={passwordValidation.maxLength}
          />
        )}
        <LoginButton type="submit">Login</LoginButton>
      </form>
    </AuthenticationLayout>
  );
}

export default Login;
