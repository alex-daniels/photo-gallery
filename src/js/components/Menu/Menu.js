import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <nav className="nav">
        <h3>Menu</h3>
        <Link to="/" className="nav-item">
          Nav item
        </Link>
        <Link to="/" className="nav-item">
          Nav item
        </Link>
        <Link to="/" className="nav-item">
          Nav item
        </Link>
      </nav>
    );
  }
}

export default Menu;