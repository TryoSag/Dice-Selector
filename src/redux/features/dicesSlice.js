import { diceRandom, listOfDices } from "../../utils/utils";

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
        dices.numberOfDicesList[action.payload]++,
      ],
    }),

    decrementDice: (dices, action) => ({
      ...dices,
      numberOfDicesList: [
        ...dices.numberOfDicesList,
        dices.numberOfDicesList[action.payload]--,
      ],
    }),

    throwDices: (dices) => {
      const dicesResults = [];
      dices.numberOfDicesList.forEach((diceCounter, index) => {
        for (let i = 0; i < diceCounter; i++) {
          dicesResults[index].push(diceRandom(listOfDices[index].diceFaces));
        }
      });
      return { ...dices, actualDicesResults: dicesResults };
    },

    resetDices: (dices) => {
      const updateResultsList = [
        dices.actualDicesResults,
        ...dices.listDicesResults,
      ];
      return {
        listDicesResults: updateResultsList,
        numberOfDicesList: initalNumberOfDicesList,
        actualDicesResults: [],
      };
    },
  },
});

export const {
  incrementDice: incrementDiceActionCreator,
  decrementDice: decrementDiceActionCreator,
  throwDices: throwDicesActionCreator,
  resetDices: resetDicesActionCreator,
} = dicesSlice.actions;

export default dicesSlice.reducer;
