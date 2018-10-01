import React, { Component } from 'react';

// Components
import Nav from '../components/Nav.jsx';

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <div className="info">
          <h1>Hunter Keca</h1>
          <p>Hai I’m Hunter, a web developer based in Texas. <br />Currently building things with JavaScript, Ruby, and PHP.</p>
        </div>
      </div>
    );
  }
}

export default HomePage;