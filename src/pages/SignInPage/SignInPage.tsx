import { Button } from "components";
import { StyledInput } from "components/Input/styles";
import { FormFieldName } from "config";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { generatePath, Link, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { useAppDispatch, signIn } from "store";
import { getFormValidation } from "utils";
import {
  ErrorMessage,
  FieldLabel,
  FormFields,
  FormFooter,
  SignInForm,
  StyledSignInPage,
  TextFooter,
  Title,
} from "./styles";

interface SignInFormValues {
  email: string;
  password: string;
}

export const SignInPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm<SignInFormValues>({
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [signInError, setSignInError] = useState<string | null>(null);

  const userInfoToSave = JSON.parse(localStorage.getItem("userInfo")!);
  if (userInfoToSave) {
    userInfoToSave.isAuth = true;
  }

  const onSubmit: SubmitHandler<SignInFormValues> = (userInfo) => {
    setSignInError(null);
    dispatch(signIn(userInfo))
      .unwrap()
      .then(() => {
        localStorage.length > 0 && localStorage.setItem("userInfo", JSON.stringify(userInfoToSave));
        navigate(ROUTE.HOME);
      })
      .catch((error) => {
        setSignInError(error);
        reset();
      });
  };
  return (
    <StyledSignInPage>
      <SignInForm onSubmit={handleSubmit(onSubmit)}>
        <Title>Sign In</Title>
        <FormFields>
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
        </FormFields>
        {signInError && <ErrorMessage>{signInError}</ErrorMessage>}
        <FormFooter>
          <Button type="submit">Sign In</Button>
          <TextFooter>
            Don’t have an account?
            <Link to={generatePath(ROUTE.SIGN_UP)}>Sign Up</Link>
          </TextFooter>
        </FormFooter>
      </SignInForm>
    </StyledSignInPage>
  );
};
