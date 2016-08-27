import React from 'react';
import AccountsUIWrapper from '/imports/ui/components/accountsUIWrapper';

const MainLayout = ({children}) => (
  <div className="container">
    <h1>Welcome to Hadits</h1>
    <AccountsUIWrapper/>
    {children}
  </div>
);

MainLayout.PropTypes = {
  children: React.PropTypes.object
}

export default MainLayout;
