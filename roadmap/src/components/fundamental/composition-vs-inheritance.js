import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <h1>{props.title}</h1>
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
        title="compositionVsInheritance:"
        propsComponent={<PropsComponent />}
      >
        <p>Hello I am props.children</p>
      </ChildComponent>
    );
  }
}

export default CompositionVsInheritance;
