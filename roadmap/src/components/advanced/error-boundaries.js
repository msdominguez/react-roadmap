import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: { message: "", stack: "" },
    info: { componentStack: "" },
  };

  static getDerivedStateFromError = (error) => {
    return { hasError: true };
  };

  componentDidCatch = (error, info) => {
    this.setState({ error, info });
  };

  render() {
    return this.state.hasError ? (
      <p style={{ color: "red" }}>Error detected</p>
    ) : (
      this.props.children
    );
  }
}

const ChildComponent = () => (
  <p style={{ color: "green" }}>No errors in this child!</p>
);

const ErrorChildComponent = () => {
  throw Error("Error message thrown in component");
};

const ErrorBoundaries = () => {
  return (
    <div>
      <p>Error thrown, error message displayed:</p>
      <ErrorBoundary>
        <ErrorChildComponent />
      </ErrorBoundary>

      <p>No error thrown, children rendered:</p>
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    </div>
  );
};

export default ErrorBoundaries;
