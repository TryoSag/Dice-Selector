import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const { createSlice } = require("@reduxjs/toolkit");

export const mockDicesStore = (initialState) => {
  const mockDicesSlice = createSlice({
    name: "dices",
    initialState,
    reducers: {},
  });

  const rootReducer = combineReducers({
    dices: mockDicesSlice.reducer,
  });

  return configureStore({
    reducer: rootReducer,
  });
};
