
import React from 'react'
import "../css/Footer.css";


export default function Footer() {
  return (


<footer className="pie-pagina">
        <div className="grupo-1">
            <div className="box">
                <figure>
                    <a href="#">
                   
                    </a>
                </figure>
            </div>
            <div className="box">
                <h2>SOBRE NOSOTROS</h2>
                <p>Empresa que busca siempre mejorar</p>
                <p>Pasenos profe</p>
            </div>
            <div className="box">
                <h2>SIGUENOS</h2>
                <div className="red-social">
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-instagram"></a>
                    <a href="#" className="fa fa-twitter"></a>
                    <a href="#" className="fa fa-youtube"></a>
                </div>
            </div>
        </div>
        <div className="grupo-2">
            <small>&copy; 2022 <b>Carlos y Luis</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>


  )
}