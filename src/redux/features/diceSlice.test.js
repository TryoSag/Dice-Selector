import dicesReducer, {
  decrementDiceActionCreator,
  incrementDiceActionCreator,
  resetDicesActionCreator,
  resetHistoricalActionCreator,
  throwDicesActionCreator,
} from "./dicesSlice";

describe("Given the incrementDiceActionCreator function", () => {
  describe("When it's called and receives indexToIncrement", () => {
    test("Then it should return a object with number of index incremented in 1", () => {
      const indexToIncrement = 1;
      const initialState = {
        numberOfDicesList: [0, 0],
        actualDicesResults: [],
        listDicesResults: [],
      };

      const expectedResult = {
        numberOfDicesList: [0, 1],
        actualDicesResults: [],
        listDicesResults: [],
      };

      const action = incrementDiceActionCreator(indexToIncrement);
      const returnedResult = dicesReducer(initialState, action);

      expect(returnedResult).toEqual(expectedResult);
    });
  });
});

describe("Given the decrementDiceActionCreator function", () => {
  describe("When it's called and receives indexToDecrement", () => {
    test("Then it should return a object with number of index decremented in 1", () => {
      const indexToDecrement = 1;
      const initialState = {
        numberOfDicesList: [0, 4],
        actualDicesResults: [],
        listDicesResults: [],
      };

      const expectedResult = {
        numberOfDicesList: [0, 3],
        actualDicesResults: [],
        listDicesResults: [],
      };

      const action = decrementDiceActionCreator(indexToDecrement);
      const returnedResult = dicesReducer(initialState, action);

      expect(returnedResult).toEqual(expectedResult);
    });
  });
});

describe("Given the throwDicesActionCreator function", () => {
  describe("When it's called", () => {
    test("Then it should return a object with actual list with lists with the length equal of number list", () => {
      const expectedLength = 2;
      const initialState = {
        numberOfDicesList: [expectedLength, expectedLength],
        actualDicesResults: [],
        listDicesResults: [],
      };

      const action = throwDicesActionCreator();
      const returnedResult = dicesReducer(initialState, action);
      const firstListLength = returnedResult.actualDicesResults[0].length;
      const secondListLength = returnedResult.actualDicesResults[1].length;

      expect(firstListLength).toBe(expectedLength);
      expect(secondListLength).toBe(expectedLength);
    });
  });
});

describe("Given the resetDicesActionCreator function", () => {
  describe("When it's called", () => {
    test("Then it should return a object with number list with 0, actual list erased and results list with one more list", () => {
      const initialState = {
        numberOfDicesList: [2, 2],
        actualDicesResults: [
          [1, 1],
          [1, 1],
        ],
        listDicesResults: [
          [
            [1, 1],
            [1, 1],
          ],
          [
            [1, 1],
            [1, 1],
          ],
          [
            [1, 1],
            [1, 1],
          ],
        ],
      };

      const expectedState = {
        numberOfDicesList: [0, 0, 0, 0, 0],
        actualDicesResults: [],
        listDicesResults: [
          [
            [1, 1],
            [1, 1],
          ],
          [
            [1, 1],
            [1, 1],
          ],
          [
            [1, 1],
            [1, 1],
          ],
          [
            [1, 1],
            [1, 1],
          ],
        ],
      };

      const action = resetDicesActionCreator();
      const returnedResult = dicesReducer(initialState, action);

      expect(returnedResult).toEqual(expectedState);
    });
  });
});

describe("Given the resetHistoricalActionCreator function", () => {
  describe("When it's called", () => {
    test("Then it should return a object with the results list deleted", () => {
      const initialState = {
        numberOfDicesList: [],
        actualDicesResults: [],
        listDicesResults: [
          [
            [1, 1],
            [1, 1],
          ],
        ],
      };

      const expectedState = {
        numberOfDicesList: [],
        actualDicesResults: [],
        listDicesResults: [],
      };

      const action = resetHistoricalActionCreator();
      const returnedResult = dicesReducer(initialState, action);

      expect(returnedResult).toEqual(expectedState);
    });
  });
});
