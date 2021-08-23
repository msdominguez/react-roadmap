import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CustomHook from './advanced/custom-hook';
import UseEffect from './fundamental/basic-hooks/use-effect';
import UseState from './fundamental/basic-hooks/use-state';
import ClassComponent from './fundamental/class-component';
import ComponentDidMount from './fundamental/component-life-cycle/component-did-mount';
import ComponentDidUpdate from './fundamental/component-life-cycle/component-did-update';
import ComponentWillUnmount from './fundamental/component-life-cycle/component-will-unmount';
import GetDerivedStateFromError from './fundamental/component-life-cycle/get-derived-state-from-error';
import GetDerivedStateFromProps from './fundamental/component-life-cycle/get-derived-state-from-props';
import GetSnapshotBeforeUpdate from './fundamental/component-life-cycle/get-snapshot-before-update';
import ShouldComponentUpdate from './fundamental/component-life-cycle/should-component-update';
import CompositionVsInheritance from './fundamental/composition-vs-inheritance';
import ConditionalRendering from './fundamental/conditional-rendering';
import FunctionalComponent from './fundamental/functional-component';
import JSX from './fundamental/jsx';
import MapKey from './fundamental/map-key';
import PropsParent from './fundamental/props-parent';
import State from './fundamental/state';
import Home from './home';

class App extends React.Component {
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
            <Route exact path="/customHook" component={CustomHook} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
