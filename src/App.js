import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import './App.css';
import navbar from './components/Navbar';
import home from './pages/home';
import Login from './pages/login';
import Navbar from './components/Navbar';
import SurveyComponent from './pages/survey';
const theme = createTheme({
  palette: {
    primary: {
      main: '#E5E5E5',
    },
    secondary: {
      main: '#64E18F',
    },
  },
});

class App extends Component {
  
  render() {
    return (
      <ThemeProvider theme={theme}>
      
        <div className="App">
          <Router>
            <Navbar/>
            <div className="container">
              <Switch>
                <Route exact path='/' component = {home} />
                <Route exact path='/login' component = {Login} />
                <Route exact path='/survey' component = {SurveyComponent} />
              </Switch>
            </div>
          </Router>
        </div>
      
    </ThemeProvider>
     
    )
  }
}

export default App

