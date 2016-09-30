import React from 'react';
import Header from './header';
import UserProfile from '../components/userProfile';
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
    <div>
      <Header/>
      <div className="container">
        <div className="row" style={styles.container}>
          <div className="twelve columns">
            <UserProfile/>
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">
            {children}
          </div>
        </div>
      </div>
    </div>
  </MuiThemeProvider>
);

MainLayout.PropTypes = {
  children: React.PropTypes.object
}

export default MainLayout;
