import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    }
  }
});

export const { reducer: counterReducer } = counterSlice;
export const { incrementCount } = counterSlice.actions;
