import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import Photo from "../Photo/Photo";

class Grid extends React.Component {
  render() {
    return (
      <section className="grid nav-disabled">
        <h2>Grid</h2>  
        <div className="grid-photos">    
        {[...Array(10)].map((x, i) =>
          <Photo key={ i } id={ i } />
        )}
        </div>
      </section>
    );
  }
}

export default Grid;