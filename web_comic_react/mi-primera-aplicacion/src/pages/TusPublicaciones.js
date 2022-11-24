import React from 'react'

import Publicar from './../components/Publicar';
import Footer from './../components/Footer';

const TusPublicaciones = () => {
  return (
    <React.Fragment>
        <section>   
          <div className='seccion bg-dark' >
          

            <Publicar/>
            </div> 
            <Footer/>
        </section>

    </React.Fragment>
  )
}

export default TusPublicaciones