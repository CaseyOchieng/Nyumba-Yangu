// we are going to  import the createSlice function from the @reduxjs/toolkit package
import { createSlice } from "@reduxjs/toolkit";
//we are going to define the initial state
const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

// we are creating a slice called userSlice
// we are defining the initial state using the createSlice function
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SignInStart: (state) => {
      state.loading = true;
    },
    SignInSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    SignInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { SignInStart, SignInSuccess, SignInFailure } = userSlice.actions;
export default userSlice.reducer;
