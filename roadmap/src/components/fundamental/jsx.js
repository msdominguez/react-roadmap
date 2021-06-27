import React from 'react';
import ReactDOM from 'react-dom';

const number = "1";

const jsxElement1 = <h1 className="greeting">inserted JSX {number}</h1>;

const jsxElement2 = React.createElement(
  "h1",
  { className: "greeting" },
  "inserted JSX 2"
);

class JSXChild extends React.Component {
  render() {
    return (
      <div>
        <h1>JSX:</h1>
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
        <h1>No JSX:</h1>
        <h1 className="greeting">inserted JSX 1</h1>
        <h1 className="greeting">inserted JSX 2</h1>
      </div>
    );
  }
}

export { NoJSX };

class JSX extends React.Component {
  render() {
    return (
      <div>
        <JSXChild />
        <hr />
        <NoJSX />
      </div>
    );
  }
}

export default JSX;
