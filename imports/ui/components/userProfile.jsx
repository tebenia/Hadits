import React from 'react';
import AccountsUIWrapper from './accountsUIWrapper';

const styles = {
  position: "relative",
  width: "100%",
  height: "5%",
  padding: 10,
  textAlign: 'center',
  display: 'inline-block',
};

const UserProfile = () => (
  <div style={styles}>
    <p>Hello, <AccountsUIWrapper/></p>
  </div>
);

export default UserProfile;
