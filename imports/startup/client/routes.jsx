import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Index} from '/imports/ui/components/index';
import {MainLayout} from '/imports/ui/layouts/main';

export const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Index}/>
    </Route>
  </Router>
);