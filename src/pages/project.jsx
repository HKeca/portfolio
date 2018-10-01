import React, { Component } from 'react';

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
      <div>
        {
          this.state.project &&
          <h1>{this.state.project.title}</h1>
        }
      </div>
    );
  }
}

export default ProjectPage;