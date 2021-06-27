import React, { useState } from 'react';

function ExampleUseState() {
  const [name, setName] = useState("Jimmy");

  return (
    <div>
      <p>name: {name}</p>
      <button onClick={() => setName("Cindy")}>Get new name</button>
    </div>
  );
}

export { ExampleUseState };

class ExampleSetState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jimmy",
    };
  }

  render() {
    return (
      <div>
        <p>this.state.name: {this.state.name}</p>
        <button onClick={() => this.setState({ name: "Cindy" })}>
          Get new name
        </button>
      </div>
    );
  }
}

export { ExampleSetState };

class UseState extends React.Component {
  render() {
    return (
      <div>
        <h1>useState:</h1>
        <ExampleUseState />
        <h1>setState:</h1>
        <ExampleSetState />
      </div>
    );
  }
}

export default UseState;
