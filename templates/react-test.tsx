import React from "react";
import { render, screen } from "@testing-library/react";
import { NAME } from "./NAME";
import { NAMEProps } from "./NAMEProps";

describe("NAME Component", () => {
  const renderComponent = (props: NAMEProps) => {
    render(<NAME {...props} />);
    return {
      component: (): HTMLElement => screen.getByTestId("NAME-container"),
    };
  };

  it("should render the component", () => {
    const { component } = renderComponent({});
    expect(component()).toBeInTheDocument();
  });
});
