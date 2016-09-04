import React from 'react';
import AccountsUIWrapper from '../components/accountsUIWrapper';
import {Link} from 'react-router';
import Header from './header';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";

const lightMuiTheme = getMuiTheme(lightBaseTheme);

const styles = {
  container:{
    zIndex: 1,
    marginTop: 50
  }
}

const MainLayout = ({children}) => (
  <MuiThemeProvider muiTheme={lightMuiTheme}>
    <div className="row">
      <div>
        <Header/>
        <div className="container" style={styles.container}>
          <AccountsUIWrapper/>
          <Link to="hadits/add" className="button">Add Hadits</Link>
          {children}
        </div>
      </div>
    </div>
  </MuiThemeProvider>
);

MainLayout.PropTypes = {
  children: React.PropTypes.object
}

export default MainLayout;
