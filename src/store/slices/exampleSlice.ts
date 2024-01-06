import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ExampleState = {
  foo: string;
};

const initialState: ExampleState = {
  foo: ""
};

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    setFoo: (state, action: PayloadAction<string>) => {
      state.foo = action.payload;
    }
  }
});

export const { reducer: exampleReducer } = exampleSlice;
export const { setFoo } = exampleSlice.actions;
