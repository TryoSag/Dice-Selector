import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { resetDicesActionCreator } from "../../redux/features/dicesSlice";
import DicesResultsList from "./DicesResultsList";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockDicesStore from "../../mocks/MockComponent";
import userEvent from "@testing-library/user-event";

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given the DicesResultsList component", () => {
  describe("When it's called and receives a click on reset button", () => {
    test("Then it should call dispatch with resetDicesActionCreator and call navigate with '/dicesCounter'", () => {
      const expectedAction = resetDicesActionCreator();
      const expectedNavigation = "/dicesCounter";
      const mockStoreState = {
        numberOfDicesList: [1, 1, 1, 1, 1],
        actualDicesResults: [
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
          [1, 2],
        ],
        listDicesResults: [],
      };

      render(
        <BrowserRouter>
          <Provider store={mockDicesStore(mockStoreState)}>
            <DicesResultsList />
          </Provider>
        </BrowserRouter>
      );

      const resetButton = screen.getByRole("button", { name: "Reset" });

      userEvent.click(resetButton);

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
      expect(mockNavigate).toHaveBeenCalledWith(expectedNavigation);
    });
  });
});
