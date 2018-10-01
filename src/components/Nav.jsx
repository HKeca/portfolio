import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="links">
        <ul>
          <li><a href="https://github.com/hkeca" target="_blank">github</a></li>
          <li><a href="https://twitter.com/hkeca" target="_blank">twitter</a></li>
          <li><Link to="/projects">projects</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nav;