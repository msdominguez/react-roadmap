import React from 'react';

import PropsChild from './props-child';

class PropsParent extends React.Component {
  render() {
    return (
      <div>
        <h2>Props:</h2>
        <PropsChild props="Secret Message" />
      </div>
    );
  }
}

export default PropsParent;
