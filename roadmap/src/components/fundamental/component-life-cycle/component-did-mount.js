import React from 'react';

class ComponentDidMount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.setState({ counter: (this.state.counter += 1) });
    console.log("component did mount");
  }

  render() {
    return (
      <div>
        <h1>componentDidMount:</h1>
        {this.state.counter}
      </div>
    );
  }
}

export default ComponentDidMount;
