import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import ProjectPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/resume" exact component={ResumePage}/>
            <Route path="/projects" exact component={ProjectPage}/>
            <Route path="/contact" exact component={ContactPage}/>
          </Switch>

        </Router>
        
      </div>
    )
  }
}

export default App;

