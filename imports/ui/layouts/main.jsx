import React from 'react';
import AccountsUIWrapper from '/imports/ui/components/accountsUIWrapper';

export const MainLayout = ({children}) => (
  <div className="container">
    <AccountsUIWrapper/>
    <h1>Welcome to Hadits</h1>

      <a className="button" href="#">Anchor button</a>
      <button>Button element</button>
      <input type="submit" value="submit input"></input>
      <input type="button" value="button input"></input>
    {children}
  </div>
);

MainLayout.PropTypes = {
  children: React.PropTypes.object
}
