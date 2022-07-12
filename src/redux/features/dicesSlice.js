import { listOfDice } from "../../utils/utils";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = listOfDice.map(() => 0);

const dicesSlice = createSlice({
  name: "dices",
  initialState: initialState,
  reducers: {
    incrementDice: (dices, action) =>
      dices.map((dice, index) => (index !== action.payload ? dice : dice++)),
    decrementDice: (dices, action) =>
      dices.map((dice, index) => (index !== action.payload ? dice : dice--)),
  },
});

export const {
  incrementDice: incrementDiceActionCreator,
  decrementDice: decrementDiceActionCreator,
} = dicesSlice.actions;

export default dicesSlice.reducer;
