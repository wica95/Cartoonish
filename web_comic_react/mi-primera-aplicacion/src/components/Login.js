import React from "react";
import "../css/Login.css";

export default function Login () {
return(


<form className="formularito" action="/Home">

  <div className="form-outline mb-4">
    <input type="email" id="form2Example1" className="form-control" />
    <label className="form-label" htmlFor="form2Example1">Email address</label>
  </div>

 
  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" />
    <label className="form-label" htmlFor="form2Example2">Password</label>
  </div>

 
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">

  
    </div>

    <div className="col">

    </div>
  </div>


  <button type="button" className="btn btn-danger btn-block mb-4">Sign in</button>

 
  <div className="text-center">
    <p>Not a member? <a href="/Registrarse">Register</a></p>

  </div>
</form>



)



}