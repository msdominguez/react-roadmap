import React from 'react';

class Home extends React.Component {
  getFundExamples() {
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
  getAdvExamples() {
    return ["customHook"];
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
        {this.getFundExamples().map((ex) => this.getLink(ex))}
        <hr />
        <h2>Advanced:</h2>
        {this.getAdvExamples().map((ex) => this.getLink(ex))}
      </div>
    );
  }
}

export default Home;
