import React, { useEffect, useState } from 'react';

function UseCallbackChild({ onItemClick, city }) {
  const [location, setLocation] = useState([]);
  const [locationKeys, setLocationKeys] = useState([]);

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=ed717cd058ef408d89905156212308&q=${city}&aqi=no`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setLocation(Object.values(result.location));
          setLocationKeys(Object.keys(result.location));
        },
        (error) => {
          setLocation([]);
          setLocationKeys([]);
        }
      );
  }, []);

  const listItems = location.map((value) => (
    <li key={value}>
      <button onClick={onItemClick}>{value}</button>
    </li>
  ));

  const stylesList = {
    listStyleType: "none",
    display: "flex",
    width: "70vw",
    flexWrap: "wrap",
  };

  return (
    <div className="card">
      <h3>{city}</h3>
      <p>{locationKeys.join(", ")}</p>
      <ul style={stylesList}>{listItems}</ul>
    </div>
  );
}

export default React.memo(UseCallbackChild);
