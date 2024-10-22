import React, { Component } from "react";

//The first correction made was to change the extension from .jsx to .tsx

//then I added an interface for the component's state to define the shape of the state object.

//finally, I typed the Component with <{}, CounterState> to indicate it has no props and uses CounterState for its state.

interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
