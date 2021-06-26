import React from 'react';

class GetDerivedStateFromPropsChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: props };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      message: "newMessage",
    };
  }

  render() {
    return (
      <div>
        <h1>static getDerivedStateFromProps:</h1>
        <h2>State: </h2>
        <p>{this.state.message}</p>
        <h2>Props: </h2>
        <p> {this.props.props}</p>
      </div>
    );
  }
}

export { GetDerivedStateFromPropsChild };

class GetDerivedStateFromProps extends React.Component {
  render() {
    return <GetDerivedStateFromPropsChild props="props" />;
  }
}

export default GetDerivedStateFromProps;
