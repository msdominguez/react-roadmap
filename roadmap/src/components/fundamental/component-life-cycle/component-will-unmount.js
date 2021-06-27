import React from 'react';

class ComponentWillUnmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUnmounted: false,
    };
  }

  render() {
    return (
      <div>
        <h1>componentWillUnmount:</h1>
        <button onClick={() => this.setState({ isUnmounted: true })}>
          Unmount item
        </button>
        {this.state.isUnmounted ? <p>is unmounted</p> : <Item />}
      </div>
    );
  }
}

class Item extends React.Component {
  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    return (
      <div>
        <p>Item</p>
      </div>
    );
  }
}

export default ComponentWillUnmount;
