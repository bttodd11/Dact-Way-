import React from "react";
import MidPhoto from "../img/backgroundImage2.jpg";
import "./carouselMid.css";

let carouselMid = () => {
  return (
    <div className="carouselMidSection">
      <img src={MidPhoto} alt="Carousel Image" className="midPhoto" />
    </div>
  );
};

export default carouselMid;
