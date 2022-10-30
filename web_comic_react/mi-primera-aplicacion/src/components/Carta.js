import React from "react";

function Carta (){
   return (



    <div className="contenedor-carta" >
        <img className="imagen-carta"
        src={require("../img/berserk.jpg")}
        alt= "foto de Berserk" />
        <div className="contenedor-carta">
            <p  className="nombre-carta">  Berserker </p>
            <p  className="texto-carta">El mejor seisen</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>

        </div>



    </div>

    );
}
export default Carta;
