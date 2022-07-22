import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <header>
        <h1>Math Magicians</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Calculator">Calculator</Link>
          <Link to="/Quote">Quote</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
