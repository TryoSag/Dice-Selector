import { combineReducers, configureStore } from "@reduxjs/toolkit";

const { createSlice } = require("@reduxjs/toolkit");

const mockDicesStore = (initialState) => {
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

export default mockDicesStore;
