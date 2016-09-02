import React from 'react';
import AccountsUIWrapper from '/imports/ui/components/accountsUIWrapper';
import {Link} from 'react-router';

const MainLayout = ({children}) => (
  <div className="container">
    <h1>Welcome to Hadits</h1>
    <AccountsUIWrapper/>
    <Link to="hadits/add" className="button">Add Hadits</Link>
    {children}
  </div>
);

MainLayout.PropTypes = {
  children: React.PropTypes.object
}

export default MainLayout;
