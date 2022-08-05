import { configureStore } from "@reduxjs/toolkit";
import dicesReducer from "../features/dicesSlice";
import uiReducer from "../features/uiSlice";

const store = configureStore({
  reducer: { dices: dicesReducer, ui: uiReducer },
});

export default store;
