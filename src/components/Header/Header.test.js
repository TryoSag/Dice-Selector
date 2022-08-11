import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { Provider } from "react-redux";
import Header from "./Header";
import store from "../../redux/store/store";

describe("Given the Header component", () => {
  describe("When it's called", () => {
    test("Then it should render a title with text 'Dice Selector'", () => {
      render(
        <Provider store={store}>
          <Header />
        </Provider>
      );

      expect(
        screen.getByRole("heading", { name: "Dice Selector" })
      ).toBeInTheDocument();
    });
  });
});
