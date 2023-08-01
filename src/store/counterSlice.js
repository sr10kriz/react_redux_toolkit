import { createSlice } from "@reduxjs/toolkit";

const CounterInitialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: CounterInitialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increByHun(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    decreByHun(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggleCount(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterReducer = counterSlice.reducer;

export const counterActions = counterSlice.actions;
