import React from 'react';

class ShouldComponentUpdateChild extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("should component update");
    return nextProps.count !== this.props.count;
  }

  render() {
    return (
      <div>
        <h2>shouldComponentUpdate:</h2>
        <p>count: {this.props.count}</p>
        <button onClick={this.props.onClick}>Increase count</button>
      </div>
    );
  }
}

export { ShouldComponentUpdateChild };

class ShouldComponentUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increase = this.increase.bind(this);
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <ShouldComponentUpdateChild
        count={this.state.count}
        onClick={this.increase}
      />
    );
  }
}

export default ShouldComponentUpdate;
