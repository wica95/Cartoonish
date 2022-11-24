import React from 'react'
import Carrusel from './../components/Carrusel';
import Carta from './../components/Carta';
import Footer from './../components/Footer';

const Home = () => {
    
  return (

    <React.Fragment>
        <section>
        <div className="seccion bg-dark">

    <Carrusel/>
    <Carta/>
    </div>
    <Footer/>
   
    </section>
    </React.Fragment>
  )
}

export default Home