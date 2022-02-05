import React from 'react';

export default class CodeSplittingChild extends React.Component {
  render() {
    const names = new Array(10000).fill("Maria");

    return (
      <div>
        {names.map((name, i) => (
          <p key={i}> name: {name} </p>
        ))}
      </div>
    );
  }
}
