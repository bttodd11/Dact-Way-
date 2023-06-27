import './App.css';
import Preloader from './components/preloader/preloader';
import $ from 'jquery';


function App() {

  const removePreLoader = () => {
    $('.preLoader').hide();
  }

  return (
    <div className="App">
      <div className="preLoader">
        <Preloader />
      </div>
    </div>
  );
}

export default App;
