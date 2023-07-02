import React from "react";
import introPhoto from "../img/backgroundImageMobile.png"
import "./carouselIntro.css";


let carouselIntro = () => {
  return(
    <div className="carouselIntroSection">
      <img src={introPhoto} className="introPhoto"/>
    </div>
  )
}
export default carouselIntro;
