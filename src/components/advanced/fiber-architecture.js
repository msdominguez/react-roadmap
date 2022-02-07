import React from 'react';

const Child = () => <li id="child">Child</li>;

const FiberArchitecture = () => {
  const childString = "<Child/>";
  const divString = "<div/>";
  const h2String = "<h2/>";
  const ulString = "<ul/>";
  return (
    <div className="container">
      <h2>Fiber Architecture:</h2>

      <ul className="parent">
        <Child />
      </ul>

      {console.log("<Child/> Fiber", (<Child />)._owner)}
      <p style={{ width: "45vw" }}>
        FiberNodes return the parent elements through the child property. The
        child is also a FiberNode object. The child has memoizedProps and
        pendingProps. These are where the children React Elements of the child
        FiberNode can be found. The return property returns the parent
        FiberNode.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        className="card"
      >
        <div style={{ paddingRight: "1rem" }}>
          <p>{childString} FiberNode:</p>
          <p>Parent {divString} FiberNode:</p>
          <p>
            {h2String} FiberNode (Parent {divString}'s child):
          </p>
          <p>
            {h2String} React Element (Parent {divString}'s child):
          </p>
          <p>
            {ulString} React Element ({childString}'s parent):
          </p>
        </div>

        <div>
          <p>{childString}._owner</p>
          <p>{childString}._owner.child</p>
          <p>{childString}._owner.child.child</p>
          <p>
            {childString}._owner.child.(memoizedProps|pendingProps).children[0]
          </p>
          <p>
            {childString}._owner.child.(memoizedProps|pendingProps).children[1]
          </p>
        </div>
      </div>
    </div>
  );
};

export default FiberArchitecture;
