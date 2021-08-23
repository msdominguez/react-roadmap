import React, { useEffect, useState } from "react";

function ExampleUseEffect() {
  const [city, setCity] = useState("West Chester");

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=ed717cd058ef408d89905156212308&q=${city}&aqi=no`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          document.getElementById(
            "city"
          ).innerHTML = `temperature in degrees F: ${result.current.temp_f}`;
        },
        (error) => {
          document.getElementById(
            "city"
          ).innerHTML = `error during API call: ${error}`;
        }
      );
  }, [city]); // only re-run the effect if name changes (componentwillUnmount, componentdidMount)

  return (
    <div>
      <p>city: {city}</p>
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
        <h2 id="city"></h2>
      </div>
    );
  }
}

export default UseEffect;
