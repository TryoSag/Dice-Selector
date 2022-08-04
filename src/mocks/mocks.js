import { combineReducers, configureStore } from "@reduxjs/toolkit";

const { createSlice } = require("@reduxjs/toolkit");

export const mockStore = (initialDicesState) => {
  const defaultDicesState = {
    numberOfDicesList: [0, 0, 0, 0, 0],
    actualDicesResults: [],
    listDicesResults: [],
  };

  const mockDicesSlice = createSlice({
    name: "dices",
    initialState: initialDicesState ? initialDicesState : defaultDicesState,
    reducers: {},
  });

  const rootReducer = combineReducers({
    dices: mockDicesSlice.reducer,
  });

  return configureStore({
    reducer: rootReducer,
  });
};
