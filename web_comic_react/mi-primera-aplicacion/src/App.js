import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carta from './components/Carta';
import Navbar from './components/Navbar';
import Carrusel from './components/Carrusel';
function App() {
  return (
    <div className="App">     
      <Navbar/>
      <Carrusel/>
      <Carta/>
    </div>
  );
}

export default App;
