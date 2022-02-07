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
        <h2>static getDerivedStateFromProps:</h2>
        <p>state: {this.state.message}</p>
        <p>props: {this.props.props}</p>
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
