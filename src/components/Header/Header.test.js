import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it's called", () => {
    test("Then it should render a title with text 'Dice Selector'", () => {
      render(<Header />);

      expect(
        screen.getByRole("heading", { name: "Dice Selector" })
      ).toBeInTheDocument();
    });
  });
});
