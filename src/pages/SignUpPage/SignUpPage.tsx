import { Button } from "components";
import { StyledInput } from "components/Input/styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import {
  FieldLabel,
  FormFields,
  FormFooter,
  SignUpForm,
  TextFooter,
  Title,
  ErrorMessage,
  StyledSignUpPage,
} from "./styles";
import { signUp, useAppDispatch } from "store";
import { getFormValidation } from "utils";
import { FormFieldName } from "config";
import { useState } from "react";
import { User } from "types";

interface SignUpFormValues {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm<SignUpFormValues>({
    mode: "onBlur",
  });
  const dispatch = useAppDispatch();
  const [signUpError, setSignUpError] = useState<null | string>(null);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignUpFormValues> = (userInfo) => {
    const userInfoStorage: User = {
      name: userInfo.userName,
      email: userInfo.email,
      isAuth: true,
    };
    dispatch(signUp(userInfo))
      .unwrap()
      .then(() => {
        localStorage.setItem("userInfo", JSON.stringify(userInfoStorage));
        navigate(ROUTE.HOME);
        reset();
      })
      .catch((error) => {
        setSignUpError(error);
      });
  };

  return (
    <StyledSignUpPage>
      <SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <Title>Sign Up</Title>
        <FormFields>
          <FieldLabel>
            Name
            <StyledInput
              placeholder="Your name"
              {...register("userName", getFormValidation(FormFieldName.NAME))}
            />
            {errors.userName && <ErrorMessage>{errors.userName.message}</ErrorMessage>}
          </FieldLabel>
          <FieldLabel>
            Email
            <StyledInput
              placeholder="Your email"
              type="email"
              {...register("email", getFormValidation(FormFieldName.EMAIL))}
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </FieldLabel>
          <FieldLabel>
            Password
            <StyledInput
              type="password"
              placeholder="Your password"
              {...register("password", getFormValidation(FormFieldName.PASSWORD))}
            />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </FieldLabel>
          <FieldLabel>
            Confirm password
            <StyledInput
              type="password"
              placeholder="Confirm password"
              {...register("confirmPassword", {
                ...getFormValidation(FormFieldName.CONFIRM_PASSWORD),
                validate: (val: string) => {
                  if (watch("password") != val) {
                    return "Your passwords do no match";
                  }
                },
              })}
            />
            {errors.confirmPassword && (
              <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
            )}
          </FieldLabel>
          {signUpError && <ErrorMessage>{signUpError}</ErrorMessage>}
        </FormFields>
        <FormFooter>
          <Button type="submit">Sign Up</Button>
          <TextFooter>
            Already have an account? <Link to={"../" + ROUTE.SIGN_IN}>Sign In</Link>
          </TextFooter>
        </FormFooter>
      </SignUpForm>
    </StyledSignUpPage>
  );
};
