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
      numberOfDicesList: dices.numberOfDicesList.map((numberOfdices, index) =>
        action.payload === index ? numberOfdices + 1 : numberOfdices
      ),
    }),

    decrementDice: (dices, action) => ({
      ...dices,
      numberOfDicesList: dices.numberOfDicesList.map((numberOfdices, index) =>
        action.payload === index ? numberOfdices - 1 : numberOfdices
      ),
    }),

    throwDices: (dices) => {
      const listOfCounters = dices.numberOfDicesList;

      return {
        ...dices,
        actualDicesResults: listOfCounters.map(
          (diceCounter, diceFacesIndex) => {
            let dicesResults = [];
            for (let i = 0; i < diceCounter; i++) {
              dicesResults.push(
                diceRandom(listOfDices[diceFacesIndex].diceFaces)
              );
            }
            return dicesResults;
          }
        ),
      };
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
