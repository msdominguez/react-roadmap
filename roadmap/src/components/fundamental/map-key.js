import React from 'react';

const Names = () => {
  const people = [
    { name: "John", number: 1 },
    { name: "Matt", number: 2 },
    { name: "Sydney", number: 3 },
  ];
  return people.map((person) => <li key={person.number}>{person.name}</li>);
};

class MapKey extends React.Component {
  render() {
    return (
      <div>
        <h1>Map and Key:</h1>
        <ul>
          <Names />
        </ul>
      </div>
    );
  }
}

export default MapKey;
