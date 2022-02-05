import React from 'react';

const OptionOne = () => <p>If statement 1</p>;
const OptionTwo = () => <p>If statement 2</p>;

const Inline = (props) => (
  <div>{props ? <p>Inline 1</p> : <p>Inline 2</p>}</div>
);

class ConditionalRendering extends React.Component {
  ifStatement() {
    if (this.props.name) {
      return <OptionOne />;
    } else {
      return <OptionTwo />;
    }
  }

  render() {
    return (
      <div>
        <h2>Conditional Rendering:</h2>
        {this.ifStatement()} <Inline props={true} />
      </div>
    );
  }
}

export default ConditionalRendering;
