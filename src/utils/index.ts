import { getFormValidation } from "./getFormValidation";
import { checkFavorites } from "./checkFavorites";
import { getMovieRating } from "./getMovieRating";
import { getRandomMovieKeyWord } from "./getRandomMovieKeyWord";
import { getUserInitials } from "./getUserInitials";
import { getFirebaseErrorMessage } from "./getFirebaseError";
import { FirebaseErrorCode } from "./getFirebaseError";
import { FirebaseErrorMessage } from "./getFirebaseError";

export {
  FirebaseErrorMessage,
  getUserInitials,
  getFormValidation,
  checkFavorites,
  getMovieRating,
  getRandomMovieKeyWord,
  getFirebaseErrorMessage,
};
export type { FirebaseErrorCode };
