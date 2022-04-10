import React from "react";

interface NAMEProps {}
interface NAMEState {
  isLoading: boolean;
}

class NAME extends React.Component<NAMEProps, NAMEState> {
  state: NAMEState = { isLoading: false };
  render() {
    return <h1>Hello, I'm NAME class component</h1>;
  }
}
