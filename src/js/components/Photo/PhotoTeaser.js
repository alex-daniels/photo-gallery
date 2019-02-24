import React from "react";
import ReactDOM from "react-dom";

import Photo from "./Photo";

class PhotoTeaser extends React.Component {
  constructor () {
    super();
    this.showPhoto = false;
  }
  handleClick = () => {
    console.log('clicked');
    this.showPhoto = !this.showPhoto;
    console.log(this.showPhoto);
  }
  render() {
    return (
      <div 
        className="photo" 
        onClick={this.handleClick}
        >
        <div className="photo-content">
          <img src="https://via.placeholder.com/300" />
          { !this.showPhoto && 
            <Photo />
          }
        </div>
      </div>
    );
  }
}

export default PhotoTeaser;