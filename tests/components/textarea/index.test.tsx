import TextArea from "@/components/textarea";
import { cleanup, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("TextArea", () => {
  it("should render input element and label", () => {
    render(<TextArea />);
    const input = screen.getByRole("textbox");
    const label = document.querySelector("label");
    expect(input).toBeDefined();
    expect(label).toBeDefined();
    cleanup();
  });
  it("should focus", () => {
    render(<TextArea />);
    const input = screen.getByRole("textbox");
    input.focus();
    expect(document.activeElement).toEqual(input);
  });
});
