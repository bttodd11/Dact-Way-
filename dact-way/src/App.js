import Preloader from "./components/preloader/preloader";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Stats from "./components/stats/stats"
import { BrowserRouter } from "react-router-dom";
import video from "../src/components/video/dactWayVideo.mp4";
import "./App.css";
import $ from "jquery";

function App() {
  const removePreLoader = () => {
    $(".preLoader").hide();
  };

  return (
    <BrowserRouter>
      <div className="App">
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
      <Stats />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
