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
        <h2>componentWillUnmount:</h2>
        <button onClick={() => this.setState({ isUnmounted: true })}>
          Unmount item
        </button>
        {this.state.isUnmounted ? <p>Component is unmounted</p> : <Item />}
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
