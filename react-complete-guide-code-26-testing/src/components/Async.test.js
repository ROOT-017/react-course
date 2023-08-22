import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("Render Async list items if succeed", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "Hello World" }],
    });
    //Arrange
    render(<Async />);
    //Act
    const linkElement = await screen.findAllByRole("listitem");
    //Assert
    expect(linkElement).not.toHaveLength(0);
  });
});
