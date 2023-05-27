import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseErrorCode, FirebaseErrorMessage, getFirebaseErrorMessage } from "utils";

interface IAccountState {
  name: string;
  email: null | string;
  password: string;
  isAuth: boolean;
  error: null | string;
  isLoading: boolean;
}

const userInfo = JSON.parse(localStorage.getItem("userInfo")!);

const initialState: IAccountState = {
  name: userInfo && userInfo.name,
  email: userInfo && userInfo.email,
  password: "",
  isAuth: userInfo && userInfo.isAuth,
  error: null,
  isLoading: false,
};

export const signUp = createAsyncThunk<
  { userEmail: string | null; name: string },
  { email: string; password: string; userName: string },
  { rejectValue: FirebaseErrorMessage }
>("account/signUp", async ({ email, password, userName }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userEmail = (await userCredential).user.email;
    const name = userName;
    return { userEmail, name };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

export const signIn = createAsyncThunk<
  { userEmail: string | null },
  { email: string; password: string },
  { rejectValue: FirebaseErrorMessage }
>("user/signInUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userEmail = userCredential.user.email;
    return { userEmail };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    logOutUser: (state) => {
      state.isAuth = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(signUp.pending, (state) => {
      state.isAuth = false;
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.error = null;
      state.email = payload.userEmail;
      state.isAuth = true;
      state.name = payload.name;
      state.isLoading = false;
    });
    builder.addCase(signUp.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
        state.isAuth = false;
        state.isLoading = false;
      }
    });
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.email = payload.userEmail;
      state.error = null;
    });
    builder.addCase(signIn.rejected, (state, { payload }) => {
      if (payload) {
        state.isAuth = false;
        state.error = payload;
        state.isLoading = false;
      }
    });
  },
});

export default accountSlice.reducer;
export const { logOutUser } = accountSlice.actions;
