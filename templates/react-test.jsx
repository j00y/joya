import React from "react";
import { render } from "@testing-library/react";
import {NAME} from "./NAME";

describe("NAME Component", () => {
  const renderComponent = (props) => {
    render(<NAME {...props} />);
    return {
      component: () => screen.getByTestId("NAME-container"),
    };
  };

  it("should render the component", () => {
    const { component } = renderComponent();
    expect(component()).toBeInTheDocument();
  });
});
