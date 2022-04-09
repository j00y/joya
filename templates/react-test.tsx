import React from "react";
import { render } from "@testing-library/react";
import NAME from "./NAME";

describe("NAME Component", () => {
  it("it should match the snapshot", () => {
    const { asFragment } = render(<NAME />);
    expect(asFragment()).toMatchSnapshot();
  });
});
