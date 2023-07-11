import React from "react";
import image1 from '../img/roomService.png';
import image2 from '../img/roomWindow.png';
import image3 from '../img/garageWash.png';
import image4 from '../img/roomClean2.jpeg';
import image5 from '../img/window.png'




import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./carousel.css"


let carousel = () => {
  return(
    <Carousel showIndicators={false} showThumbs={false} autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false}>
     <div>
       <img src={image1} className="carouselImage" alt="Room Service" />
    </div>
    <div>
       <img src={image2} className="carouselImage" alt="Room Window"  />
    </div>
    <div>
       <img src={image3} className="carouselImage" alt="Garage Wash" />
    </div>
    <div>
       <img src={image4} className="carouselImage" alt="Room Clean 2"/>
    </div>
    <div>
       <img src={image5} className="carouselImage" alt="Window" />
    </div>
</Carousel>
)
}

export default carousel;


