import { combineReducers } from "@reduxjs/toolkit";

import { exampleReducer } from "@/store/slices/exampleSlice";

const rootReducer = combineReducers({
  example: exampleReducer
});

export default rootReducer;
