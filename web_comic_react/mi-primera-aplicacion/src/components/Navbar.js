import React from 'react'
import { NavLink } from 'react-router-dom';
import "../css/Navbar.css";

const Navbar = () => {
  const activeLink = 'bg-blue-100 text-black'
  const normalLink = ''
  return (
    <React.Fragment>
      <ul>
    <div >
     <NavLink  to= '/' > <li> <a>Home </a>  </li></NavLink>   
      <NavLink  to= '/Tuspublicaciones' > <li> <a>  Tus Publicaciones </a></li> </NavLink>
      <NavLink  to= '/Categorias'  > <li>  <a>  Categorias</a> </li> </NavLink>
      <NavLink  to= '/Registrarse'  > <li>  <a>  No tienes cuenta?</a> </li> </NavLink>
      <NavLink  to= '/Ingresar'  > <li>  <a>  Iniciar Sesion</a> </li> </NavLink>
    </div>
  
    </ul>
    </React.Fragment>
  )
}

export default Navbar