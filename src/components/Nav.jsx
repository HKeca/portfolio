import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const projects = require('../../projects.json').projects;

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  renderExpanded() {
    let Projs = projects.map(el => {
      return <Link to={`/project/${el.id}`}>{el.title}</Link>;
    });

    return <Projs />;
  }

  render() {
    return (
      <div className="links">
        <ul>
          <li>
            <Link className="link" to="/">home</Link>
          </li>
          <li>
            <a className="link" 
              href="https://github.com/hkeca" target="_blank">github</a>
          </li>
          <li>
            <a className="link" 
              href="https://twitter.com/hkeca" target="_blank">twitter</a>
          </li>
          <li>
            <Link className="link" to="/projects">projects</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;