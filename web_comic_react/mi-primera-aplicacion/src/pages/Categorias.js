
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from '../components/Footer';
import Carta from '../components/Carta';
import Genero from './../components/Genero';

export default function Categorias() {
  return (

    <React.Fragment>
        <section>
    

   <Genero/>
    <Carta/>
    <Footer/>
    </section>
    </React.Fragment>
  )
}

