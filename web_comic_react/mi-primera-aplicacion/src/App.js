
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React from 'react';
//import Carta from './components/Carta';
//import Carrusel from './components/Carrusel';
//import Genero from './components/Genero';
import Publicar from './components/Publicar';
//import Aprobar from './components/Aprobar';
import Publicacion from './components/Publicacion';
//import Formulario_R from './components/Formulario_R';
//import Login from './components/Login';
import Home from './pages/Home';
import MainPage from './components/MainPage';


import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
 
      <React.Fragment>
       <BrowserRouter>

      <MainPage/> 


      </BrowserRouter>

      </React.Fragment>
      
  
  );
}

export default App;
