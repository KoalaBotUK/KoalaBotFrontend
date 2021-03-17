import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Landing from "../Landing";

describe("Landing page tests", () => {
  it("should render the basic structure", () => {
    const { queryByTestId } = render(<Landing />);

    expect(queryByTestId("landing")).toBeInTheDocument();
    expect(queryByTestId("landing_navbar")).toHaveTextContent(
      "Sign UpLog InDashboard"
    );
    expect(queryByTestId("features")).toBeInTheDocument();
    expect(queryByTestId("interview")).toBeInTheDocument();
    expect(queryByTestId("devs")).toBeInTheDocument();
    expect(queryByTestId("brands")).toBeInTheDocument();
    expect(queryByTestId("footer")).toBeInTheDocument();
  });
});

describe("rendering the correct developer profiles tests", () => {
  const noLink = [
    {
      name: "test",
      title: "example_title",
      pic: "default.png",
    },
  ];

  const noImage = [
    {
      name: "test",
      title: "example_title",
    },
  ];

  const oneLink = [
    {
      name: "test",
      title: "example_title",
      pic: "default.png",
      links: {
        linkedin: "website.com",
      },
    },
  ];

  const allLinks = [
    {
      name: "test",
      title: "example_title",
      pic: "default.png",
      links: {
        linkedin: "linkedin.com",
        website: "website.com",
        twitter: "twitter.com",
      },
    },
  ];

  it("should render the correct profile details", () => {
    const { queryByTestId } = render(<Landing developers={oneLink} />);

    expect(queryByTestId("dev-name")).toHaveTextContent("test");
    expect(queryByTestId("dev-title")).toHaveTextContent("example_title");
  });

  it("should render the profile with one link", () => {
    const { queryAllByTestId } = render(<Landing developers={oneLink} />);

    expect(queryAllByTestId("dev-link")).toHaveLength(1);
  });

  it("should render all links for the profile", () => {
    const { queryAllByTestId } = render(<Landing developers={allLinks} />);

    expect(queryAllByTestId("dev-link")).toHaveLength(3);
  });

  it("should have functioning links based from json and reorder to correct order", () => {
    const { queryAllByTestId } = render(<Landing developers={allLinks} />);

    // Order should always be linkedin, twitter, website
    expect(queryAllByTestId("dev-link")[0]).toHaveAttribute(
      "href",
      "linkedin.com"
    );
    expect(queryAllByTestId("dev-link")[1]).toHaveAttribute(
      "href",
      "twitter.com"
    );
    expect(queryAllByTestId("dev-link")[2]).toHaveAttribute(
      "href",
      "website.com"
    );
  });

  it("should correctly render the padding on no links", () => {
    const { queryByTestId } = render(<Landing developers={noLink} />);

    expect(queryByTestId("missing-link-padding")).toBeInTheDocument();
    expect(queryByTestId("dev-link")).not.toBeInTheDocument();
  });

  it("should render default image if no image defined", () => {
    const { getByAltText } = render(<Landing developers={noImage} />);

    expect(getByAltText("test-profile")).toBeInTheDocument();
  });
});
