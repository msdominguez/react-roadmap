import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ClassComponent from './class-component';
import ComponentDidMount from './component-life-cycle/component-did-mount';
import ComponentDidUpdate from './component-life-cycle/component-did-update';
import ComponentWillUnmount from './component-life-cycle/component-will-unmount';
import GetDerivedStateFromError from './component-life-cycle/get-derived-state-from-error';
import GetDerivedStateFromProps from './component-life-cycle/get-derived-state-from-props';
import GetSnapshotBeforeUpdate from './component-life-cycle/get-snapshot-before-update';
import ShouldComponentUpdate from './component-life-cycle/should-component-update';
import CompositionVsInheritance from './composition-vs-inheritance';
import ConditionalRendering from './conditional-rendering';
import FunctionalComponent from './functional-component';
import Home from './home';
import JSX from './jsx';
import MapKey from './map-key';
import PropsParent from './props-parent';
import State from './state';
import UseEffect from './use-effect';
import UseState from './use-state';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), counter: 0 };
    this.increase = this.increase.bind(this);
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

  increase() {
    this.setState({ counter: this.state.counter + 1 });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <a href="/">
          <button>Home</button>
        </a>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/jsx" component={JSX} />
            <Route
              exact
              path="/functionalComponent"
              component={FunctionalComponent}
            />
            <Route exact path="/classComponent" component={ClassComponent} />
            <Route exact path="/state" component={State} />
            <Route exact path="/props" component={PropsParent} />
            <Route
              exact
              path="/conditionalRendering"
              component={ConditionalRendering}
            />
            <Route
              exact
              path="/componentDidMount"
              component={ComponentDidMount}
            />
            <Route
              exact
              path="/componentDidUpdate"
              component={ComponentDidUpdate}
            />
            <Route
              exact
              path="/componentWillUnmount"
              component={ComponentWillUnmount}
            />
            <Route
              exact
              path="/shouldComponentUpdate"
              component={ShouldComponentUpdate}
            />
            <Route
              exact
              path="/getDerivedStateFromProps"
              component={GetDerivedStateFromProps}
            />
            <Route
              exact
              path="/getSnapshotBeforeUpdate"
              component={GetSnapshotBeforeUpdate}
            />
            <Route
              exact
              path="/getDerivedStateFromError"
              component={GetDerivedStateFromError}
            />
            <Route exact path="/mapKey" component={MapKey} />
            <Route
              exact
              path="/compositionVsInheritance"
              component={CompositionVsInheritance}
            />
            <Route exact path="/useState" component={UseState} />
            <Route exact path="/useEffect" component={UseEffect} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
