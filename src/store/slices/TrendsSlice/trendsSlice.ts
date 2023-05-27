import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { MovieAPI, transformMovies } from "services";
import { Movie } from "types";

interface MoviesState {
  movies: Movie[];
  isLoading: boolean;
  error: null | string;
}

interface TrendsParams {
  search: string;
  type: string;
  page: number;
}

export const fetchTrends = createAsyncThunk<Movie[], TrendsParams, { rejectValue: string }>(
  "trends/fetchTrends",
  async ({ search, page, type }, { rejectWithValue }) => {
    try {
      const movies = await MovieAPI.getMovieBySearch(search, type, page);

      if (movies.Error) {
        return rejectWithValue(movies.Error);
      } else {
        return transformMovies(movies.Search);
      }
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
  movies: [],
  isLoading: false,
  error: null,
};

const trendsSlice = createSlice({
  name: "trends",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTrends.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchTrends.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    });
    builder.addCase(fetchTrends.rejected, (state, action) => {
      if (action.payload) {
        state.isLoading = false;
        state.error = action.payload;
      }
    });
  },
});

export default trendsSlice.reducer;
