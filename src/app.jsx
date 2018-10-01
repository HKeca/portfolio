import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Pages
import HomePage from './pages/home.jsx';
import ProjectsPage from './pages/projects.jsx';
import ProjectPage from './pages/project.jsx';

// Styles
require('./styles/app.scss');

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/project/:id" component={ProjectPage} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));