import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MovieAPI, transformMovieDetails } from "services";
import { MovieDetails } from "types";
import axios from "axios";

interface MoviesState {
  movieDetails: MovieDetails;
  isLoading: boolean;
  error: null | string;
}

export const fetchMovieDetails = createAsyncThunk<MovieDetails, string, { rejectValue: string }>(
  "details/fetchMovieDetails",
  async (imdb, { rejectWithValue }) => {
    try {
      const movieDetails = await MovieAPI.getMovieByIMDB(imdb);
      const transformedMovieDetails = transformMovieDetails(movieDetails);

      return transformedMovieDetails;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An unexpected error occurred");
      }
    }
  },
);

const initialState: MoviesState = {
  movieDetails: {} as MovieDetails,
  isLoading: false,
  error: null,
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovieDetails.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movieDetails = action.payload;
    });
    builder.addCase(fetchMovieDetails.rejected, (state, action) => {
      if (action.payload) {
        state.isLoading = false;
        state.error = action.payload;
      }
    });
  },
});

export default detailsSlice.reducer;
