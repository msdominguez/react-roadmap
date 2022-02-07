import React from 'react';

class Listener extends React.Component {
  render() {
    return (
      <div className={this.props.main.className}>
        <p>Component taking in other component through render props</p>
      </div>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      className: "",
    };
  }

  handleClick() {
    this.setState({
      className: "card",
    });
  }

  render() {
    return (
      <div>
        <div className={this.state.className}>
          <p>Main component</p>
        </div>

        {this.props.render(this.state)}

        <button onClick={this.handleClick} style={{ marginTop: "1rem" }}>
          Set the state
        </button>
      </div>
    );
  }
}

export default class RenderProps extends React.Component {
  render() {
    return (
      <div>
        <h2>Render props:</h2>
        <Main render={(main) => <Listener main={main} />} />
      </div>
    );
  }
}
