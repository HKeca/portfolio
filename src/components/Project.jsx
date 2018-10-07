import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="projects-project">
        <div>
          <span className="project-text">
            {this.props.title}
          </span>
          <Link to={`/project/${this.props.id}`} 
                className="link">View project</Link>
        </div>
      </div>
    );
  }
}

export default Project;