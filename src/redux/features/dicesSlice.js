const { createSlice } = require("@reduxjs/toolkit");

const dicesSlice = createSlice({
  name: "dices",
  initialState: [],
  reducers: {
    incrementDice: (dices, action) =>
      dices.map((dice, index) =>
        index !== action.payload.index ? dice : dice++
      ),
    decrementDice: (dices, action) =>
      dices.map((dice, index) =>
        index !== action.payload.index ? dice : dice--
      ),
  },
});

export const {
  incrementDice: incrementDiceActionCreator,
  decrementDice: decrementDiceActionCreator,
} = dicesSlice.actions;

export default dicesSlice.reducer;
