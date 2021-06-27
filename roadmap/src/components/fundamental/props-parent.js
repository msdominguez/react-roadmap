import React from 'react';

import PropsChild from './props-child';

class PropsParent extends React.Component {
  render() {
    return (
      <div>
        <h1>Props:</h1>
        <PropsChild props="Secret Message" />
      </div>
    );
  }
}

export default PropsParent;
