import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.children}
      {props.propsComponent}
    </div>
  );
}

function PropsComponent() {
  return (
    <div>
      <p>Hello I am propsComponent</p>
    </div>
  );
}

class CompositionVsInheritance extends React.Component {
  render() {
    return (
      <ChildComponent
        title="Composition V.S. Inheritance:"
        propsComponent={<PropsComponent />}
      >
        <p>Hello I am props.children</p>
      </ChildComponent>
    );
  }
}

export default CompositionVsInheritance;
