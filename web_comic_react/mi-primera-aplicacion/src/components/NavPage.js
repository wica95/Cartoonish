import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './../pages/Home';
import TusPublicaciones from './../pages/TusPublicaciones';
import Categorias from './../pages/Categorias';
import Leer from '../pages/Leer';
import Ingresar from '../pages/Ingresar';
import Registrarse from '../pages/Registrarse';
const NavPage = () => {
  return (
    <React.Fragment>
        <section>
    <Routes>
<Route path='/' element ={<Home/>} />

<Route path='/categorias' element ={<Categorias/>} />
<Route path='/TusPublicaciones' element ={<TusPublicaciones/>} />
<Route path='/Leer' element ={<Leer/>} />
<Route path='/Ingresar' element ={<Ingresar/>} />
<Route path='/Registrarse' element ={<Registrarse/>} />


    </Routes>
    </section>
    </React.Fragment>
  )
}

export default NavPage