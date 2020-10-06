import { any } from 'prop-types';
import React, { lazy, Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

const Index = lazy(() => import('./pages/Index'));

interface Props {

}

export const App = (props: Props) => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Index} exact/>
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
