import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    searchResult: null,
    isLoading: true,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGPTMovieResult: (state, action) => {
      const { movieNames, searchResult } = action.payload;
      state.movieNames = movieNames;
      state.searchResult = searchResult;
    },
    setIsLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { toggleGPTSearchView, addGPTMovieResult, setIsLoading } =
  gptSlice.actions;
export default gptSlice.reducer;
