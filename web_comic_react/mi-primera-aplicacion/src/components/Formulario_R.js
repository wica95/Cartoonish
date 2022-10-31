import React from "react";
import "../css/Formulario_R.css";


export default function Formulario_R() {
return(

  <div  style={{ 
    backgroundImage:  `url("https://img.freepik.com/foto-gratis/textura-pared-estuco-azul-marino-relieve-decorativo-abstracto-grunge-fondo-color-rugoso-gran-angular_1258-28311.jpg?w=1380&t=st=1667174296~exp=1667174896~hmac=429d53af44e58332b7876686f467c16f6cf48056d409deebdcb78c76e6290b34")`
  }}>
    <section class="form-register">
    <h4>Formulario Registro</h4>
    <input class="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre"/>
    <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su Apellido"/>
    <input class="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo"/>
    <input class="controls" type="password" name="correo" id="correo" placeholder="Ingrese su Contraseña"/>
    <p>Estoy de acuerdo con <a href="#">Terminos y Condiciones</a></p>
    <input class="botons" type="submit" value="Registrar"/>
    <p><a href="#">¿Ya tengo Cuenta?</a></p>
  </section>
  </div>




)
}