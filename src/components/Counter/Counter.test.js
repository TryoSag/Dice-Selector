import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Given the Counter component", () => {
  describe("When it's called and receives the counterNumber 3", () => {
    test("Then it should render a element with 3 on the text", () => {
      render(<Counter counterNumber={3} />);

      expect(screen.getByText("3")).toBeInTheDocument();
    });
  });

  describe("When it's called and receives a click on first button", () => {
    test("Then it should call the testAction", () => {
      const testAction = jest.fn();

      render(<Counter minusAction={testAction} />);

      const renderedButtons = screen.getAllByRole("button");

      userEvent.click(renderedButtons[0]);

      expect(testAction).toBeCalled();
    });
  });

  describe("When it's called and receives a click on the second button", () => {
    test("Then it should call the testAction", () => {
      const testAction = jest.fn();

      render(<Counter plusAction={testAction} />);

      const renderedButtons = screen.getAllByRole("button");

      userEvent.click(renderedButtons[1]);

      expect(testAction).toBeCalled();
    });
  });
});
