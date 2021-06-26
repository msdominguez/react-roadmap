import React from 'react';

class GetDerivedStateFromError extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  render() {
    return (
      <React.StrictMode>
        <div>
          <h1>static getDerivedStateFromError:</h1>
          {this.state.hasError ? (
            <div>hasError = true</div>
          ) : (
            <ErrorComponent />
          )}
        </div>
      </React.StrictMode>
    );
  }
}

export default GetDerivedStateFromError;

class ErrorComponent extends React.Component {
  render() {
    return <p>{this.state.value}</p>;
  }
}
