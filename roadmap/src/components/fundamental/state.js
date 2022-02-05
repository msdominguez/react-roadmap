import React from 'react';

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stateValue: "Hello" };
  }

  render() {
    return (
      <div>
        <h2>State:</h2>
        <p>This is the value in the state: {this.state.stateValue}</p>
      </div>
    );
  }
}

export default State;
