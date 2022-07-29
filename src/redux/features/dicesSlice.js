import { listOfDices } from "../../utils/utils";

const { createSlice } = require("@reduxjs/toolkit");

const initalNumberOfDicesList = listOfDices.map(() => 0);

const dicesSlice = createSlice({
  name: "dices",
  initialState: {
    numberOfDicesList: initalNumberOfDicesList,
    actualDicesResults: [],
    listDicesResults: [],
  },
  reducers: {
    incrementDice: (dices, action) => ({
      ...dices,
      numberOfDicesList: [
        ...dices.numberOfDicesList,
        (dices.numberOfDicesList[action.payload] =
          dices.numberOfDicesList[action.payload] + 1),
      ],
    }),

    decrementDice: (dices, action) => ({
      ...dices,
      numberOfDicesList: [
        ...dices.numberOfDicesList,
        (dices.numberOfDicesList[action.payload] =
          dices.numberOfDicesList[action.payload] - 1),
      ],
    }),

    resetDices: (dices) => ({
      ...dices,
      listDicesResults: dices.listDicesResults.unshift(
        dices.actualDicesResults
      ),
      numberOfDicesList: initalNumberOfDicesList,
      actualDicesResults: [],
    }),
  },
});

export const {
  incrementDice: incrementDiceActionCreator,
  decrementDice: decrementDiceActionCreator,
  resetDices: resetDicesActionCreator,
} = dicesSlice.actions;

export default dicesSlice.reducer;
