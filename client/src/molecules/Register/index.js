import React from "react";
import styled from "styled-components";
import AuthenticationLayout from "../../templates/AuthenticationLayout";
import ErrorMessage from "../../atoms/ErrorMessage";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {
  nameValidation,
  emailValidation,
  passwordValidation,
} from "../../utils/validation";
const SignupButton = styled(Button)`
  display: block;
  width: 100%;
  margin-top: 2.3rem;
`;

function Register() {
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm({ mode: "onSubmit" });
  const history = useHistory();
  const password = watch("password");
  const onSubmit = (data) => {
    console.log(data);
    history.push("/");
  };
  const validate = (value) =>
    value === password || "Confirm Password does not match";
  return (
    <AuthenticationLayout
      title="Signup"
      summary="We don't share your personal details with anyone"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          name="firstName"
          register={register}
          placeholder="First Name"
          validation={nameValidation}
        />
        {errors.firstName && (
          <ErrorMessage
            field="First Name"
            type={errors.firstName.type}
            minLength={nameValidation.minLength}
          />
        )}
        <Input
          type="text"
          name="lastName"
          register={register}
          placeholder="Last Name"
          validation={nameValidation}
        />
        {errors.lastName && (
          <ErrorMessage
            field="Last Name"
            type={errors.lastName.type}
            minLength={nameValidation.minLength}
          />
        )}
        <Input
          type="email"
          name="email"
          register={register}
          placeholder="Email"
          validation={emailValidation}
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
          placeholder="Password"
          validation={passwordValidation}
        />
        {errors.password && (
          <ErrorMessage
            field="Password"
            type={errors.password.type}
            minLength={passwordValidation.minLength}
            maxLength={passwordValidation.maxLength}
          />
        )}
        <Input
          type="password"
          name="confirmPassword"
          register={register}
          validate={validate}
          // {...register("confirmPassword", {
          //   validate: validate,
          // })}
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && (
          <ErrorMessage
            field="Confirm Password"
            type={errors.confirmPassword.type}
            minLength={passwordValidation.minLength}
            maxLength={passwordValidation.maxLength}
            message={errors.confirmPassword.message}
          />
        )}

        <SignupButton type="submit">Signup</SignupButton>
      </form>
    </AuthenticationLayout>
  );
}

export default Register;
