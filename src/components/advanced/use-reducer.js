import React, { useReducer } from 'react';

const initialState = { name: "Maria" };

function reducer(state, action) {
  switch (action.type) {
    case "changeName":
      return { name: "Jimmy" };
    case "resetName":
      return { name: "Maria" };
    default:
      throw new Error();
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>useReducer:</h2>
      <p>name: {state.name}</p>
      <button onClick={() => dispatch({ type: "changeName" })}>
        Change name
      </button>
      <button onClick={() => dispatch({ type: "resetName" })}>
        Reset name
      </button>
    </div>
  );
}
