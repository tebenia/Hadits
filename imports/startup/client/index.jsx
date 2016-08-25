import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {Index} from '/imports/ui/components/index';

export const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Index}/>
  </Router>
);