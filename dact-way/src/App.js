import './App.css';
import Preloader from './components/preloader/preloader';
import Nav from './components/nav/nav';
import { BrowserRouter } from "react-router-dom";
import $ from 'jquery';


function App() {

  const removePreLoader = () => {
    $('.preLoader').hide();
  }

  return (
    <BrowserRouter>
    <div className="App">
      <div className="preLoader">
        <Preloader />
      </div>
      <div className="mainSection">
        <Nav />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
