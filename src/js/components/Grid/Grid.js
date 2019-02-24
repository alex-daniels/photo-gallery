import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class Grid extends React.Component {
  render() {
    return (
      <section className="grid">
        <div className="grid-content">
          <h2>Grid</h2>  
          <div className="grid-photos">    
            <Link to="/photo?id=1">
              photo
            </Link><br />
            <Link to="/photo?id=2">
              photo
            </Link><br />
            <Link to="/photo?id=3">
              photo
            </Link><br />
          </div>
        </div>
      </section>
    );
  }
}

export default Grid;