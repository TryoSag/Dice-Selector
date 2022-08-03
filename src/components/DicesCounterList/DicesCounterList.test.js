import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import DicesCounterList from "./DicesCounterList";
import store from "../../redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { throwDicesActionCreator } from "../../redux/features/dicesSlice";

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

describe("Given the DicesCounterList component", () => {
  describe("When it's called and and receives a click on the throw button", () => {
    test("Then it should call dispatch with throwDicesActionCreator and call navigate with '/dicesResults'", () => {
      const expectedAction = throwDicesActionCreator();
      const expectedNavigation = "/dicesResults";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <DicesCounterList />
          </Provider>
        </BrowserRouter>
      );

      const throwButton = screen.getByRole("button", { name: "Throw" });

      userEvent.click(throwButton);

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
      expect(mockNavigate).toHaveBeenCalledWith(expectedNavigation);
    });
  });
});
