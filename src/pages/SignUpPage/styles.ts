import styled from "styled-components";
import { Media, Color } from "ui";

const StyledSignUpPage = styled.div`
  place-self: center;

  width: clamp(272px, 100%, 574px);
`;

const SignUpForm = styled.form`
  display: grid;
  grid-template-rows: repeat(4, auto);
  row-gap: 40px;

  background-color: ${Color.DARK};
  border-radius: 10px;
  color: white;

  ${Media.XXS} {
    padding: 24px;
  }

  ${Media.MD} {
    padding: 40px;
  }
`;

const Title = styled.h3`
  place-self: center start;
`;

const FormFields = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  row-gap: 24px;
`;

const FieldLabel = styled.label`
  display: grid;
  grid-template-rows: auto 56px;
  row-gap: 8px;
`;

const FormFooter = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 32px;
`;

const TextFooter = styled.p`
  place-self: center;

  color: ${Color.SECONDARY};

  a {
    text-decoration: underline;

    color: ${Color.PRIMARY};
  }
`;

const ErrorMessage = styled.span`
  color: red;
`;
export {
  SignUpForm,
  Title,
  FormFields,
  FieldLabel,
  TextFooter,
  FormFooter,
  ErrorMessage,
  StyledSignUpPage,
};
