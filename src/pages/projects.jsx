import React, { Component } from 'react';

// Components
import Nav from '../components/Nav.jsx';
import Project from '../components/Project.jsx';

const projects = require('../../projects.json').projects;

class ProjectsPage extends Component {
  render() {
    return (
      <div className="container">
        <Nav />

        <div className="projects">
          {
            projects.map((el, index) => (
              <Project key={index} id={el.id} title={el.title} tags="React" />
            ))
          }
        </div>
      </div>
    );
  }
}

export default ProjectsPage;