import React, { useEffect, useState } from 'react';

function withData(WrappedComponent, selectData) {
  return function (props) {
    const [data, setData] = useState([]);

    useEffect(() => {
      setData(selectData);
    }, []);
    return <WrappedComponent data={data} {...props} />;
  };
}

const namesListData = ["Kerry", "Jerry", "Larry", "Mary", "Perry"];
const colorsListData = ["red", "orange", "green", "blue", "purple"];

function NamesList(props) {
  return (
    <div>
      <p>Names:</p>
      {props.data ? props.data.map((d, i) => <p key={i}>{d}</p>) : "no data"}
    </div>
  );
}

function ColorsList(props) {
  return (
    <div>
      <p>Colors:</p>
      {props.data
        ? props.data.map((d, i) => (
            <p key={i} style={{ color: d }}>
              {d}
            </p>
          ))
        : "no data"}
    </div>
  );
}

const NamesListWithData = withData(NamesList, namesListData);
const ColorsListWithData = withData(ColorsList, colorsListData);

export default class HigherOrderComponents extends React.Component {
  render() {
    return (
      <div>
        <h2>Higher Order Components:</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
          className="card"
        >
          <NamesListWithData />
          <ColorsListWithData />
        </div>
      </div>
    );
  }
}
