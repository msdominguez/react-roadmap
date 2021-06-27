import React from 'react';

const OptionOne = () => <h1>If statement 1</h1>;
const OptionTwo = () => <h1>If statement 2</h1>;

const Inline = (props) => (
  <div>{props ? <h1>Inline 1</h1> : <h1>Inline 2</h1>}</div>
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
        {this.ifStatement()} <Inline props={true} />
      </div>
    );
  }
}

export default ConditionalRendering;
