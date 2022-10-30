import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carta from './components/Carta';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">     
      <Navbar/>
      <Carta/>
    </div>
  );
}

export default App;
