import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/Home'
import Test from './pages/Test'
import NotFound from './pages/NotFound'

export const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/test" component={Test} />
      <Route component={NotFound}/>
    </Switch>
  </>
);
