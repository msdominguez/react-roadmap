import React, { useEffect, useState } from "react";

function ExampleUseEffect() {
  const [city, setCity] = useState("West Chester");
  const [temp, setTemp] = useState("0");

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=ed717cd058ef408d89905156212308&q=${city}&aqi=no`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setTemp(result.current.temp_f);
        },
        (error) => {
          setTemp("0");
        }
      );
  }, [city]); // only re-run the effect if city changes (componentwillUnmount, componentdidMount)

  return (
    <div>
      <p>city: {city}</p>
      <p>temperature in degrees F: {temp}</p>
      <button onClick={() => setCity("Philadelphia")}>Get new city</button>
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
      </div>
    );
  }
}

export default UseEffect;
