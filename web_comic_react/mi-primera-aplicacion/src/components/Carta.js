import React from "react";
import "../css/Carta.css";

function Carta (){
   return (



    <div className="container" >
        <div   className=" card">

            <figure>
            <img className="imagen-carta"
            src={require("../img/berserk.jpg")}
            alt= "foto de Berserk" />
            </figure>
            <div className="contenido">
                <h1>Berserker</h1>
                <p>Ver el mejor seinen de la historia</p>
                <a  href="#">Leer mas</a>

            </div>

        </div>
         <div   className=" card">
            
            <figure>
            <img className="imagen-carta"
            src={require("../img/solo_lev.jpg")}
            alt= "foto de Berserk" />
            </figure>
            <div className="contenido">
                <h1>Solo leveling</h1>
                <p>Para levelear</p>
                <a  href="#">Leer mas</a>

            </div>

        </div>
        <div   className=" card">
            
            <figure>
            <img className="imagen-carta"
            src={require("../img/Bleach.png")}
            alt= "foto de Berserk" />
            </figure>
            <div className="contenido">
                <h1>Bleach</h1>
                <p>Ver el mejor shonen de la historia</p>
                <a  href="#">Leer mas</a>

            </div>

        </div>
        <div   className=" card">
            
            <figure>
            <img className="imagen-carta"
            src={require("../img/blu_L.jpg")}
            alt= "foto de Berserk" />
            </figure>
            <div className="contenido">
                <h1>Blue Lock</h1>
                <p>Manga de fucho</p>
                <a  href="#">Leer mas</a>

            </div>

        </div>

    </div>

    );
}
export default Carta;
