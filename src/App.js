import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import './App.css';
import navbar from './components/Navbar';
import Home from './pages/home';
import Login from './pages/login';
import Navbar from './components/Navbar';
import SurveyComponent from './pages/survey';
import Form from './pages/form';
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
                <Route exact path='/home' component = {Home} />
                <Route exact path='/' component = {Home} />
                <Route exact path='/form' component = {Form} />
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

