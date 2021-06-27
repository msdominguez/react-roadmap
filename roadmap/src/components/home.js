import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Examples:</h1>
        <a href="/jsx">
          <button>jsx</button>
        </a>
        <a href="/functionalComponent">
          <button>functional component</button>
        </a>
        <a href="/classComponent">
          <button>class component</button>
        </a>
        <a href="/state">
          <button>state</button>
        </a>
        <a href="/props">
          <button>props</button>
        </a>
        <a href="/conditionalRendering">
          <button>conditional rendering</button>
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
        <a href="/mapKey">
          <button>map and key</button>
        </a>
        <a href="/compositionVsInheritance">
          <button>composition vs inheritance</button>
        </a>
        <a href="/useState">
          <button>useState</button>
        </a>
        <a href="/useEffect">
          <button>useEffect</button>
        </a>
      </div>
    );
  }
}

export default Home;
