import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import MainLayout from '/imports/ui/layouts/main';
import Index from '/imports/ui/components/index';
import AddHadits from '/imports/ui/components/addHadits';
import EditHadits from '/imports/ui/containers/editHadits';
import SearchHadits from '/imports/ui/components/searchHadits';

export const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Index}/>
      <Route path="hadits/add" component={AddHadits}/>
      <Route path="hadits/:id" component={EditHadits}/>
      <Route path="search" component={SearchHadits}/>
    </Route>
  </Router>
);
