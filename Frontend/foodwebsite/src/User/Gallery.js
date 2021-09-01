import React, { Component } from "react";
import img1 from "../../images/pizza-1.jpg";
import img2 from "../../images/pizza-2.jpg";
import img3 from "../../images/pizza-3.jpg";
import img4 from "../../images/featured2.jpg";
import img5 from "../../images/featured3.jpg";
import "./Gallery.css";

export class Gallery extends Component {
  render() {
    return (
      <div>
        <div class="main">
          <div class="gallery" >
            <div class="img">
              <img src={img1} alt="" />
            </div>
            <div class="img">
              <img src={img2} alt="" />
            </div>
            <div class="img">
              <img src={img5} alt="" class="view" />
              <h5 class="first-txt">View Gallery</h5>
            </div>
            <div class="img">
              <img src={img4} alt="" />
            </div>
            <div class="img">
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
