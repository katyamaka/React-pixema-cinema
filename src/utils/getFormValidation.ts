import { FormFieldName } from "config";

export const getFormValidation = (fieldName: FormFieldName) => {
  switch (fieldName) {
    case FormFieldName.NAME:
      return {
        required: "Name is required. Please try again",
        pattern: {
          value: /^[аa-яzАA-ЯZ\s]*$/,
          message: "Please, enter your correct name with letters",
        },
      };
    case FormFieldName.EMAIL:
      return {
        required: {
          value: true,
          message: "Please, enter your correct e-mail",
        },
      };
    case FormFieldName.PASSWORD:
      return {
        required: "Please, enter your password",
        minLength: {
          value: 5,
          message: "Minimum 5 characters",
        },
      };
    case FormFieldName.CONFIRM_PASSWORD:
      return {
        required: "Please confirm password",
        minLength: {
          value: 5,
          message: "Minimum 5 characters",
        },
      };
  }
};
