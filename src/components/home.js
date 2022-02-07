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
    return [
      "customHook",
      "useCallback",
      "useRef",
      "useMemo",
      "useReducer",
      "useContext",
      "context",
      "refs",
      "renderProps",
      "codeSplitting",
      "higherOrderComponents",
      "portals",
      "errorBoundaries",
      "fiberArchitecture",
    ];
  }

  getLink(title, i) {
    const href = `/${title}`;
    return (
      <a href={href} key={i}>
        <button>{title}</button>
      </a>
    );
  }

  render() {
    return (
      <div>
        <h1>React Roadmap</h1>
        <p>
          Examples of fundamental and advanced topics from{" "}
          <a className="link" href="https://roadmap.sh/react" target="_blank">
            https://roadmap.sh/react
          </a>
        </p>
        <hr />
        <h3>Fundamental:</h3>
        {this.getFundExamples().map((ex, i) => this.getLink(ex, i))}
        <h3>Advanced:</h3>
        {this.getAdvExamples().map((ex, i) => this.getLink(ex, i))}
      </div>
    );
  }
}

export default Home;
