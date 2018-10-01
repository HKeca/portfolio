import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project">
        <span className="project-text">
          {this.props.title}
        </span>
        <Link to={`/project/${this.props.id}`} 
              className="project-link">View project</Link>
      </div>
    );
  }
}

export default Project;