import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HelloWorld } from "./HelloWorld";

describe("Given HelloWorld component", () => {
  describe("When it renders", () => {
    test("Then it should show the text hello world!", async () => {
      // ARRANGE
      const text = "Hello World!";
      render(<HelloWorld />);

      // ACT
      const component = await screen.findByText(text);
      screen.debug;
      // ASSERT
      expect(component).toBeInTheDocument();
    });
  });
});
