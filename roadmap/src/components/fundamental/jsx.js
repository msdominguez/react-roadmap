import React from 'react';

const jsxElement1 = <p style={{ color: "green" }}>Greeting 1</p>;
const jsxElement2 = React.createElement(
  "p",
  { style: { color: "green" } },
  "Greeting 2"
);

class JSXChild extends React.Component {
  render() {
    return (
      <div>
        {jsxElement1}
        {jsxElement2}
      </div>
    );
  }
}

export { JSXChild };

class NoJSX extends React.Component {
  render() {
    return (
      <div>
        <p style={{ color: "green" }}>Greeting 1</p>
        <p style={{ color: "green" }}>Greeting 2</p>
      </div>
    );
  }
}

export { NoJSX };

class JSX extends React.Component {
  render() {
    return (
      <div>
        <h2>JSX:</h2>
        <JSXChild />
        <h2>No JSX:</h2>
        <NoJSX />
      </div>
    );
  }
}

export default JSX;
