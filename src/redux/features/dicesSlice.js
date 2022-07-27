import { diceRandom, listOfDices } from "../../utils/utils";

const { createSlice } = require("@reduxjs/toolkit");

const dicesSlice = createSlice({
  name: "dices",
  initialState: {
    actualDicesResults: [],
    dicesResults: [],
  },
  reducers: {
    incrementDice: (dices, action) => ({
      ...dices,
      actualDicesResults: [
        ...dices.actualDicesResults,
        (dices.actualDicesResults[action.payload] = [
          ...dices.actualDicesResults[action.payload],
          diceRandom(listOfDices[action.payload].diceFaces),
        ]),
      ],
    }),

    decrementDice: (dices, action) => ({
      ...dices,
      actualDicesResults: [
        ...dices.actualDicesResults,
        dices.actualDicesResults[action.payload].filter((diceResult,index,diceArray)=>{index-1===diceArray.length  diceResult }),
      ],
    }),

    //revisar filter per treure l'ultim valor

    resetDices: (dices) => {
      dices.dicesResults.unshift(dices.actualDicesResults);
      dices.actualDicesResults = [];
    },
  },
});

export const {
  incrementDice: incrementDiceActionCreator,
  decrementDice: decrementDiceActionCreator,
  resetDices: resetDicesActionCreator,
} = dicesSlice.actions;

export default dicesSlice.reducer;
