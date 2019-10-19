import React from "react";
import "./gallery.css";

class DogImage extends React.Component<> {
  render() {
    console.log("render");
    return <img src={this.props.src} className="photo" />;
  }
}

export default DogImage;
