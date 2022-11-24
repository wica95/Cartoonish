import React from "react";
import "../css/Formulario_R.css";


export default function Formulario_R() {
return(

 
    <section className="form-register">
    <h4>Formulario Registro</h4>
    <input className="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre"/>
    <input className="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su Apellido"/>
    <input className="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo"/>
    <input className="controls" type="password" name="password" id="password" placeholder="Ingrese su Contraseña"/>
    <p>Estoy de acuerdo con <a href="#">Terminos y Condiciones</a></p>
    <input className="botons" type="submit" value="Registrar"/>
    <p><a href="/Ingresar">¿Ya tengo Cuenta?</a></p>
  </section>





)
}