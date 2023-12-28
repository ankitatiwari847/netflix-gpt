import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
    showHamburgerMenu: false,
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
    toggleHamburgerMenu: (state) => {
      state.showHamburgerMenu = !state.showHamburgerMenu;
    },
  },
});

export const { changeLanguage, toggleHamburgerMenu } = configSlice.actions;
export default configSlice.reducer;
