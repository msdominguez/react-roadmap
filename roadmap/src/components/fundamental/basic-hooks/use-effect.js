import React, { useEffect, useState } from 'react';

function ExampleUseEffect() {
  const [name, setName] = useState("Jimmy");

  useEffect(() => {
    document.getElementById("name").innerHTML = `name from useEffect: ${name}`;
  });

  return (
    <div>
      <p>name: {name}</p>
      <button onClick={() => setName("Cindy")}>Get new name</button>
    </div>
  );
}

export { ExampleUseEffect };

class UseEffect extends React.Component {
  render() {
    return (
      <div>
        <h1>useEffect:</h1>
        <ExampleUseEffect />
        <h2 id="name"></h2>
      </div>
    );
  }
}

export default UseEffect;
