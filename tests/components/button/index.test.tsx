import { describe, it, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Button from "@/components/button";
import { BrowserRouter } from "react-router-dom";

describe("Button", () => {
  it("should render button element", () => {
    const children = "Hello World";
    render(<Button>{children}</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDefined();
    expect(button.innerHTML).toEqual(children);
    cleanup();
  });
  it("should render a link element", () => {
    const children = "Go to home";
    render(<Button to="/home">{children}</Button>, { wrapper: BrowserRouter });
    const link = screen.getByRole("link");
    expect(link).toBeDefined();
    link.click();
    expect(window.location.pathname).toEqual("/home");
    cleanup();
  });
});
