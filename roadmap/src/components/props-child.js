import React from 'react';

class PropsChild extends React.Component {
  render() {
    return <div>Here is what the parent passed in: {this.props.props}</div>;
  }
}

export default PropsChild;
