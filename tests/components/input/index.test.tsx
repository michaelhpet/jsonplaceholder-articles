import Input from "@/components/input";
import { cleanup, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Input", () => {
  it("should render input element and label", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    const label = document.querySelector("label");
    expect(input).toBeDefined();
    expect(label).toBeDefined();
    cleanup();
  });
  it("should focus", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    input.focus();
    expect(document.activeElement).toEqual(input);
  });
});
