import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("Render Greeting", () => {
    render(<Greeting />);
    const linkElement = screen.getByText(/Hello World/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("Render Life's Good by LG if the button is not clicked", () => {
    render(<Greeting />);
    const linkElement = screen.getByText(/Life's Good by LG/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("does not render 'Life is Good by LG' when button is clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    // userEvent.click(buttonElement);
    buttonElement.click();

    //Assert
    const linkElement = screen.queryByText("Life's Good by LG");
    expect(linkElement).toBeNull();
  });
});
