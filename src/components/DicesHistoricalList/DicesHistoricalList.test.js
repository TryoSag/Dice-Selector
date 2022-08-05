import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import DicesHistoricalList from "./DicesHistoricalList";
import { mockStore } from "../../mocks/mocks";
import { resetHistoricalActionCreator } from "../../redux/features/dicesSlice";
import userEvent from "@testing-library/user-event";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given the DicesHistoricalList component", () => {
  describe("When it's called and receives a click on Reset button", () => {
    test("Then it should call dispatch with resetHistoricalActionCreator", () => {
      const initialStoreState = {
        numberOfDicesList: [],
        actualDicesResults: [],
        listDicesResults: [
          [[1], [2]],
          [[1], [2]],
          [[1], [2]],
          [[1], [2]],
          [[1], [2]],
        ],
      };
      const expectedAction = resetHistoricalActionCreator();

      render(
        <BrowserRouter>
          <Provider store={mockStore(initialStoreState)}>
            <DicesHistoricalList />
          </Provider>
        </BrowserRouter>
      );

      const resetButton = screen.getByRole("button", { name: "Reset" });

      userEvent.click(resetButton);

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
