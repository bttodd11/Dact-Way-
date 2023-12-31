import React from "react";
import Preloader from "./components/preloader/preloader";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Stats from "./components/stats/stats";
import Carousel from "./components/carousel/carousel";
import CarouselIntro from "./components/carouselIntro/carouselIntro";
import Services from "./components/services/services";
import Testimonies from "./components/testimonies/testimonies";
import Contact from "./components/contact/contact";
import CarouselMid from "./components/carouselMid/carouselMid";
import video from "../src/components/video/dactWayVideo.mp4";
import "./App.css";
import $ from 'jquery';

function App() {

  const removePreLoader = () => {
    $('.preLoader').hide();
    $('.mainSection').show();
  };

  $(document).ready(function() {
    $('.mainSection').hide();
    $(window).on('load', function() {
      setTimeout(removePreLoader, 1400)
    })
  })

  return (
    <body>
      <div className="preLoader">
        <Preloader />
      </div>
      <div className="mainSection">
        <Nav />
        <div className="videoContainer">
          <video autoPlay muted loop playsInline className="hero">
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <About />
        <CarouselIntro />
        <Services />
        <CarouselMid />
        <Stats />
        <Testimonies />
        <Contact />
        <Carousel />
      </div>
      </body>
  );
}

export default App;
