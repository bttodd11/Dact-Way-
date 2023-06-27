import React from "react";
import preLoaderImage from "./img/dactWayLogo.png"
import './preloader.css';


const preloader = () => {

  return(
    <div id="preloaderSection">
          <img className="preLoadImg"  src={preLoaderImage} />
    </div>
  )

}

export default preloader;
