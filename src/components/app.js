import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CodeSplitting from './advanced/code-splitting-parent';
import Context from './advanced/context';
import CustomHook from './advanced/custom-hook';
import ErrorBoundaries from './advanced/error-boundaries';
import FiberArchitecture from './advanced/fiber-architecture';
import HigherOrderComponents from './advanced/higher-order-components';
import Portals from './advanced/portals';
import Refs from './advanced/refs';
import RenderProps from './advanced/render-props';
import UseCallbackParent from './advanced/use-callback-parent';
import UseContext from './advanced/use-context';
import UseMemo from './advanced/use-memo';
import UseReducer from './advanced/use-reducer';
import UseRef from './advanced/use-ref';
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

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/jsx",
    element: <JSX />,
  },
  {
    path: "/functionalComponent",
    element: <FunctionalComponent />,
  },
  {
    path: "/classComponent",
    element: <ClassComponent />,
  },
  {
    path: "/state",
    element: <State />,
  },
  {
    path: "/props",
    element: <PropsParent />,
  },
  {
    path: "/conditionalRendering",
    element: <ConditionalRendering />,
  },
  {
    path: "/componentDidMount",
    element: <ComponentDidMount />,
  },
  {
    path: "/componentDidUpdate",
    element: <ComponentDidUpdate />,
  },
  {
    path: "/componentWillUnmount",
    element: <ComponentWillUnmount />,
  },
  {
    path: "/shouldComponentUpdate",
    element: <ShouldComponentUpdate />,
  },
  {
    path: "/getDerivedStateFromProps",
    element: <GetDerivedStateFromProps />,
  },
  {
    path: "/getSnapshotBeforeUpdate",
    element: <GetSnapshotBeforeUpdate />,
  },
  {
    path: "/getDerivedStateFromError",
    element: <GetDerivedStateFromError />,
  },
  {
    path: "/mapKey",
    element: <MapKey />,
  },
  {
    path: "/compositionVsInheritance",
    element: <CompositionVsInheritance />,
  },
  {
    path: "/useState",
    element: <UseState />,
  },
  {
    path: "/useEffect",
    element: <UseEffect />,
  },
  {
    path: "/customHook",
    element: <CustomHook />,
  },
  {
    path: "/useCallback",
    element: <UseCallbackParent />,
  },
  {
    path: "/useRef",
    element: <UseRef />,
  },
  {
    path: "/useMemo",
    element: <UseMemo />,
  },
  {
    path: "/useReducer",
    element: <UseReducer />,
  },
  {
    path: "/useContext",
    element: <UseContext />,
  },
  {
    path: "/context",
    element: <Context />,
  },
  {
    path: "/refs",
    element: <Refs />,
  },
  {
    path: "/renderProps",
    element: <RenderProps />,
  },
  {
    path: "/codeSplitting",
    element: <CodeSplitting />,
  },
  {
    path: "/higherOrderComponents",
    element: <HigherOrderComponents />,
  },
  {
    path: "/portals",
    element: <Portals />,
  },
  {
    path: "/errorBoundaries",
    element: <ErrorBoundaries />,
  },
  {
    path: "/fiberArchitecture",
    element: <FiberArchitecture />,
  },
];
class App extends React.Component {
  render() {
    return (
      <div>
        <a href="/">
          <button>Home</button>
        </a>
        <BrowserRouter>
          <Routes>
            {routes.map((route, i) => (
              <Route exact path={route.path} element={route.element} key={i} />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
