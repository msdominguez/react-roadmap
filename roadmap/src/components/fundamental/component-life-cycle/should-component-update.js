import React from 'react';

class ShouldComponentUpdateChild extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("should component update");
    return nextProps.props !== this.props.props;
  }

  render() {
    return (
      <div>
        <h1>shouldComponentUpdate:</h1>
        <h3>{this.props.props}</h3>
        <button onClick={this.props.onClick}>increase</button>
      </div>
    );
  }
}

export { ShouldComponentUpdateChild };

class ShouldComponentUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.increase = this.increase.bind(this);
  }

  increase() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <ShouldComponentUpdateChild
        props={this.state.counter}
        onClick={this.increase}
      />
    );
  }
}

export default ShouldComponentUpdate;
