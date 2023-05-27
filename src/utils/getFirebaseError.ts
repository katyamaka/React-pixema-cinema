export type FirebaseErrorCode =
  | "auth/email-already-in-use"
  | "auth/wrong-password"
  | "auth/user-not-found";

export enum FirebaseErrorMessage {
  EMAIL_ALREADY_IN_USE = "The email is already in use",
  WRONG_PASSWORD = "Incorrect email or password.",
  NOT_FOUND = "User not found",
  UNKNOWN_ERROR = "An unexpected error occurred",
}
export const getFirebaseErrorMessage = (code: FirebaseErrorCode) => {
  switch (code) {
    case "auth/email-already-in-use":
      return FirebaseErrorMessage.EMAIL_ALREADY_IN_USE;
    case "auth/wrong-password":
      return FirebaseErrorMessage.WRONG_PASSWORD;
    case "auth/user-not-found":
      return FirebaseErrorMessage.NOT_FOUND;
    default:
      return FirebaseErrorMessage.UNKNOWN_ERROR;
  }
};
