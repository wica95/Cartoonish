import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carta from './components/Carta';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Genero from '../components/M_genero/Genero';

function App() {
  return (
    <div className="App">    
      
      <Navbar/>
    <Genero/>   
      <Carta/>
      <Footer/> 
    </div>
  );
}

export default App;
