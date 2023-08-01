import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./authSlice";
import { counterReducer } from "./counterSlice";

// const store = configureStore({ reducer: counterSlice.reducer }); // this only single reducer slices..

const store = configureStore({
  reducer: { counterSlice: counterReducer, authSlice: authReducer },
}); // if we have multiple slices then we haVE to use it like this, ultimately a store must have only one reducer, but here we pass two reducer slices, note: here under the hood it will merges the two reducers to one global reducer then we access out slice reducer using properties of them...

export default store;
