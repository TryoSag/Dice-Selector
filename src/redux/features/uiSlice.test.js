import uiReducer, { toggleHistoricalActionCreator } from "./uiSlice";

describe("Given the toggleHistoricalActionCreator function", () => {
  describe("When it's called and ui historical it's True", () => {
    test("Then it should return ui with historical False", () => {
      const initialUiState = { historical: true };
      const expectedResult = { historical: false };

      const action = toggleHistoricalActionCreator();

      const returnedResult = uiReducer(initialUiState, action);

      expect(returnedResult).toEqual(expectedResult);
    });
  });
});
