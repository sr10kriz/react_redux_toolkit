import { createSlice } from "@reduxjs/toolkit";

const authInitialState = { isUserAuthenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isUserAuthenticated = !state.isUserAuthenticated;
    },
    logout(state) {
      state.isUserAuthenticated = !state.isUserAuthenticated;
    },
  },
});

export const authReducer = authSlice.reducer;

export const authActions = authSlice.actions;
