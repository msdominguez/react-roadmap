import React from 'react';

class ComponentDidUpdateChild extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.props !== prevProps.props) {
      console.log("component did update");
    }
  }

  render() {
    return (
      <div>
        <h2>componentDidUpdate:</h2>
        {this.props.props}
      </div>
    );
  }
}

export { ComponentDidUpdateChild };

class ComponentDidUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(
      () =>
        this.setState({
          date: new Date(),
        }),
      1000
    );
  }

  render() {
    return (
      <ComponentDidUpdateChild props={this.state.date.toLocaleTimeString()} />
    );
  }
}

export default ComponentDidUpdate;
