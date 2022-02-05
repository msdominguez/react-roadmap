import React, { Suspense } from 'react';

const CodeSplittingChild = React.lazy(() =>
  import("./code-splitting-child.js")
);

export default class CodeSplitting extends React.Component {
  render() {
    return (
      <div>
        <h2>Code Splitting: </h2>
        <Suspense fallback={<div> Loading... </div>}>
          <CodeSplittingChild />
        </Suspense>
      </div>
    );
  }
}
