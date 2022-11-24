import React from "react";
import "../css/Publicar.css"

function Publicar (){
    return (
 <div className="seccion">
     <div className="container">
        <h3 className="text-light">Publicar</h3>
        <hr className="bg-light"></hr>
    </div>
    <div className="container mb-3">
        <div className="row">
            <div className="col-md-4">
                <div className="dropdown">
                    <a className="btn btn-info dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Seleccionar Categoria
                    </a>

                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
                        <div className="fNormal">
                            <li><a className="dropdown-item" href="/">Categoria1</a></li>
                            <li><a className="dropdown-item" href="/">Categoria2</a></li>
                            <li><a className="dropdown-item" href="/">Categoria3</a></li>
                            <li><a className="dropdown-item" href="/">Categoria4</a></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="container bg-info rounded ">
        <div className="container">
            <div className="row">
                <div className="col-md-8 ">
                    <div className="row">
                        <div className="col-6">
                            <div className="md-3 mt-2">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Titulo</label>
                                <input className="form-control bg-dark text-white" id="exampleFormControlInput1"
                                    placeholder="Menos de 50 caracteres"></input>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 mt-2">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Resumen</label>
                        <textarea className="form-control bg-dark text-white" rows="4" placeholder="Menos de 500 caracteres"></textarea>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card col-mb-3 card text-white bg-dark rounded mt-4 align-items-center">
                        <div className="card-body">
                            <h5 className="card-title">Multimedia</h5>
                        </div>
                        <img src="" className="card-img-top" alt="..."></img>
                        <div className="py-2">
                            <a href="#" className="btn btn-success">Subir</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="bg-dark"></hr>
            <div className="row pb-4 ">
                <div className="col-8">

                </div>
                <div className="d-grid gap-2 col-md-2 mx-auto mt-3">
                    <button type="button" className="btn btn-success ">Publicar</button>
                </div>
            </div>
        </div>
    </div>
 </div>
 
        );
    }
    export default Publicar;
     