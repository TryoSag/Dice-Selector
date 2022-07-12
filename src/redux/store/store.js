import { configureStore } from "@reduxjs/toolkit";
import dicesReducer from "../features/dicesSlice";

const store = configureStore({ reducer: { dices: dicesReducer } });

export default store;
