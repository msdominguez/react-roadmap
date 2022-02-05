import React from 'react';

class ListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.btn = React.createRef();
    this.focusBtn = this.focusBtn.bind(this);
  }

  focusBtn() {
    this.btn.current.focus();
  }

  render() {
    return (
      <div onClick={this.focusBtn} className="card">
        <p>
          {this.props.firstName} {this.props.lastName}
        </p>
        <button ref={this.btn}>more info</button>
      </div>
    );
  }
}

class Refs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const names = [
      {
        firstName: "Megan",
        lastName: "Smith",
      },
      {
        firstName: "Larry",
        lastName: "Hall",
      },
      {
        firstName: "Rosie",
        lastName: "Taylor",
      },
    ];

    return (
      <div>
        <h2>Refs:</h2>
        <p>Click inside a card and the button will be focused.</p>
        {names.map((name, i) => (
          <ListEntry
            firsName={name.firstName}
            lastName={name.lastName}
            key={i}
          />
        ))}
      </div>
    );
  }
}

export default Refs;
