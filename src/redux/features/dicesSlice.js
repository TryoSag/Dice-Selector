import { listOfDices } from "../../utils/utils";

const { createSlice } = require("@reduxjs/toolkit");

const inicialDicesCounters = listOfDices.map(() => 0);

const dicesSlice = createSlice({
  name: "dices",
  initialState: {
    dicesCounters: inicialDicesCounters,
    actualDicesResults: [],
    dicesResults: [],
  },
  reducers: {
    incrementDice: (dices, action) =>
      dices.dicesCounters.map((dice, index) =>
        index !== action.payload ? dice : dice++
      ),
    decrementDice: (dices, action) =>
      dices.dicesCounters.map((dice, index) =>
        index !== action.payload ? dice : dice--
      ),
    resetDices: (dices) => (dices.dicesCounters = inicialDicesCounters),
  },
});

export const {
  incrementDice: incrementDiceActionCreator,
  decrementDice: decrementDiceActionCreator,
  resetDices: resetDicesActionCreator,
} = dicesSlice.actions;

export default dicesSlice.reducer;
