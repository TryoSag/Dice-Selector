import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Dice from "./Dice";

describe("Given the Dice component", () => {
  describe("When it's called and receives 'testClass' and 3", () => {
    test("Then it should render a element with 3 on the text", () => {
      render(<Dice diceClass={"testClass"} diceNumber={3} />);

      expect(screen.getByText("3")).toBeInTheDocument();
    });
  });
});
