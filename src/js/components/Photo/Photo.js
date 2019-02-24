import React from "react";
import ReactDOM from "react-dom";

import Caption from "../Captions/Caption";
import Meta from "../Meta/Meta";

class Photo extends React.Component {
  render() {
    return (
      <section className="photo">
        <div className="photo-content">
          <h2>Photo</h2>
        </div>
        <Caption />
        <Meta />
      </section>
    );
  }
}

export default Photo;