import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import {
  decrementDiceActionCreator,
  incrementDiceActionCreator,
} from "../../redux/features/dicesSlice";
import DiceCounter from "./DiceCounter";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import mockDicesStore from "../../mocks/MockComponent";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given the DiceCounter component", () => {
  describe("When it's called and receives diceIndex 3 and a click on the first button", () => {
    test("Then it should call dispatch with action to decrement with 3", () => {
      const testIndex = 3;
      const testDice = { diceClass: "test", diceFaces: 3 };
      const mockStoreState = {
        numberOfDicesList: [1, 1, 1, 1, 1],
        actualDicesResults: [],
        listDicesResults: [],
      };
      const expectedArgument = decrementDiceActionCreator(testIndex);

      render(
        <Provider store={mockDicesStore(mockStoreState)}>
          <DiceCounter dice={testDice} diceIndex={testIndex} />
        </Provider>
      );

      const renderedButtons = screen.getAllByRole("button");
      userEvent.click(renderedButtons[0]);

      expect(mockDispatch).toHaveBeenCalledWith(expectedArgument);
    });
  });

  describe("When it's called and receives diceIndex 3 and a click on the second button", () => {
    test("Then it should increment the text number", () => {
      const testIndex = 3;
      const testDice = { diceClass: "test", diceFaces: 3 };

      const expectedArgument = incrementDiceActionCreator(testIndex);

      render(
        <Provider store={store}>
          <DiceCounter dice={testDice} diceIndex={testIndex} />
        </Provider>
      );

      const renderedButtons = screen.getAllByRole("button");
      userEvent.click(renderedButtons[1]);

      expect(mockDispatch).toHaveBeenCalledWith(expectedArgument);
    });
  });
});
