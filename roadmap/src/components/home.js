import React from 'react';

class Home extends React.Component {
  getExamples() {
    return [
      "jsx",
      "functionalComponent",
      "classComponent",
      "state",
      "props",
      "conditionalRendering",
      "componentDidMount",
      "componentDidUpdate",
      "componentWillUnmount",
      "shouldComponentUpdate",
      "getDerivedStateFromProps",
      "getSnapshotBeforeUpdate",
      "getDerivedStateFromError",
      "mapKey",
      "compositionVsInheritance",
      "useState",
      "useEffect",
    ];
  }

  getLink(title) {
    const href = `/${title}`;
    return (
      <a href={href}>
        <button>{title}</button>
      </a>
    );
  }

  render() {
    return (
      <div>
        <h1>Examples:</h1>
        <h2>Fundamental:</h2>
        {this.getExamples().map((ex) => this.getLink(ex))}
        <hr />
        <h2>Advanced:</h2>
      </div>
    );
  }
}

export default Home;
