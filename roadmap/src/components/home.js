import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Examples:</h1>
        <a href="/mapKey">
          <button>Map and key</button>
        </a>
        <a href="/functionalComponent">
          <button>Functional component</button>
        </a>
        <a href="/classComponent">
          <button>Class component</button>
        </a>
        <a href="/state">
          <button>State</button>
        </a>
        <a href="/props">
          <button>Props</button>
        </a>
        <a href="/conditionalRendering">
          <button>Conditional rendering</button>
        </a>
        <a href="/componentDidMount">
          <button>componentDidMount</button>
        </a>
        <a href="/componentDidUpdate">
          <button>componentDidUpdate</button>
        </a>
        <a href="/componentWillUnmount">
          <button>componentWillUnmount</button>
        </a>
        <a href="/shouldComponentUpdate">
          <button>shouldComponentUpdate</button>
        </a>
        <a href="/getDerivedStateFromProps">
          <button>getDerivedStateFromProps</button>
        </a>
        <a href="/getSnapshotBeforeUpdate">
          <button>getSnapshotBeforeUpdate</button>
        </a>
        <a href="/getDerivedStateFromError">
          <button>getDerivedStateFromError</button>
        </a>
        <a href="/jsx">
          <button>jsx</button>
        </a>
      </div>
    );
  }
}

export default Home;
