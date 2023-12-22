import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: function (state, action) {
      //set the state as action.payload
      return action.payload;
    },
    removeUser: (state, action) => {
      //set state to null i.e. delete the user existing
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
