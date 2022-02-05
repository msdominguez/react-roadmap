import React from 'react';

class GetSnapshotBeforeUpdateChild extends React.Component {
  constructor(props) {
    super(props);
    this.titleRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const title = this.titleRef.current;
    if (title.props !== prevProps.props) {
      return prevProps.props;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const colors = ["red", "blue", "green"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    if (snapshot !== null) {
      console.log("snapshot exists");
      this.titleRef.current.style.color = randomColor;
    }
  }

  render() {
    return (
      <div>
        <h2>getSnapshotBeforeUpdate:</h2>
        <p ref={this.titleRef} style={{ color: "purple" }}>
          {this.props.props}
        </p>
      </div>
    );
  }
}

export { GetSnapshotBeforeUpdateChild };

class GetSnapshotBeforeUpdate extends React.Component {
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
      <GetSnapshotBeforeUpdateChild
        props={this.state.date.toLocaleTimeString()}
      />
    );
  }
}

export default GetSnapshotBeforeUpdate;
