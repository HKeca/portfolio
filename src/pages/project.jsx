import React, { Component } from 'react';

// Components
import Nav from '../components/Nav.jsx';

const projects = require('../../projects.json').projects;

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = { project: null };
  }

  componentWillMount() {
    let id = this.props.match.params.id;

    projects.forEach((el, index) => {
      if (el.id == id)
        return this.setState({ project: el });
    });
  }

  render() {
    return (
      <div className="container">
        <Nav extended={true} />

        <div className="project">
          {
            this.state.project &&
            <div>
              <h1 className="project-title">{this.state.project.title}</h1>
              <p className="project-info">{this.state.project.desc}</p>

              {
                this.state.project.image &&
                <a target="_blank" href={this.state.project.image}>Screenshot</a>
              }
            </div>
          }
        </div>
      </div>
    );
  }
}

export default ProjectPage;