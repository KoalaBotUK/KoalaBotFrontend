import React from "react";
import { render, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Base from "../Base";

describe("Base tests", () => {
  it("should render the basic correct structure", () => {
    const { queryByTestId } = render(<Base />);

    expect(queryByTestId("sidebar")).toBeInTheDocument();
    expect(queryByTestId("header")).toBeInTheDocument();
    expect(queryByTestId("main-content")).toBeInTheDocument();
    expect(queryByTestId("footer")).toBeInTheDocument();
    expect(queryByTestId("cookies")).toBeInTheDocument();
  });
});

describe("Interacting with sidebar", () => {
  it("should activate side bar on click", () => {
    const { queryByTestId } = render(<Base />);
    const sidebar = queryByTestId("sidebar");
    expect(sidebar).not.toHaveClass("active");

    act(() => {
      queryByTestId("sidebar-hamburger").click();
    });

    expect(sidebar).toHaveClass("active");
  });

  it("should should de-activate after clicking hamburger to close", () => {
    const { queryByTestId } = render(<Base />);
    const sidebar = queryByTestId("sidebar");
    expect(sidebar).not.toHaveClass("active");

    act(() => {
      queryByTestId("sidebar-hamburger").click();
    });

    act(() => {
      queryByTestId("sidebar-hamburger").click();
    });

    expect(sidebar).not.toHaveClass("active");
  });

  it("should activate side bar when clicking on search icon", () => {
    const { queryByTestId } = render(<Base />);
    const sidebar = queryByTestId("sidebar");
    expect(sidebar).not.toHaveClass("active");

    act(() => {
      queryByTestId("sidebar-search").click();
    });

    expect(sidebar).toHaveClass("active");
  });
});

describe("Interacting with dark mode toggle", () => {
  it("should enable dark mode on click", () => {
    const { queryByTestId } = render(<Base />);

    const darkToggle = queryByTestId("dark-switch");
    expect(darkToggle.checked).toBe(false);
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");

    act(() => {
      darkToggle.click();
    });

    expect(darkToggle.checked).toBe(true);
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });
});

describe("Interacting with dark mode toggle", () => {
  it("should disappear when clicked", () => {
    const { queryByTestId } = render(<Base />);

    expect(queryByTestId("cookies")).toHaveClass("open");

    act(() => {
      queryByTestId("cookies-accept").click();
    });

    expect(queryByTestId("cookies")).not.toHaveClass("open");
  });

  it("should not render next time run without clearing cookies", () => {
    const { queryByTestId } = render(<Base />);

    expect(queryByTestId("cookies")).not.toHaveClass("open");
  });
});
