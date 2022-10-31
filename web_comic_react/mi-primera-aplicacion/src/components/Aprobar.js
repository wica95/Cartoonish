
import React from "react";
import "../css/Aprobar.css"

function Aprobar (){
    return (
<div className="seccion">     
    <div class="container">
        <h3 class="text-black">Revisar Publicaciones</h3>
        <hr class="bg-light"></hr>
    </div>


    <div className="container-fluid pt-5 mb-5">
        <div className="row">



            <div className="col-md-4 text-white">
                <div className="row col-md-6 offset-md-4">
                    <div className="card bg-info">
                        <div className="py-2">
                            <div className="card mb-3 bg-dark">
                                <div>
                                    <h5 className="pt-1 ps-3 ">Publicaciones pendientes: </h5>
                                </div>
                            </div>
                            <div className="card bg-dark">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Titulo</h5>
                                    <p className="card-text ">Resumen </p>
                                    <p className="card-text"><small className="text-muted">Fecha</small></p>
                                    <a href="#" className="btn btn-primary">Mostrar</a>
                                    <hr className="bg-dark"></hr>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Titulo</h5>
                                    <p className="card-text ">Resumen </p>
                                    <p className="card-text"><small className="text-muted">Fecha</small></p>
                                    <a href="#" className="btn btn-primary">Mostrar</a>
                                    <hr className="bg-dark"></hr>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Titulo</h5>
                                    <p className="card-text ">Resumen </p>
                                    <p className="card-text"><small className="text-muted">Fecha</small></p>
                                    <a href="#" className="btn btn-primary">Mostrar</a>
                                    <hr className="bg-dark"></hr>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card col-md-4 bg-info text-white mb-5">
                <div className="py-2">
                    <div className="card bg-dark">
                        <div className="px-3 py-3">
                            <img src="" className="card-img-top" alt="..."></img>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title ">Titulo</h5>
                            <p className="card-text ">Resumen</p>
                            <p className="card-text"><small className="text-muted">Fecha de creacion</small></p>

                            <div className="mb-3 mt-2">
                                <label for="exampleFormControlTextarea1" className="form-label ">Comentarios</label>
                                <textarea className="form-control bg-dark text-white" rows="4"
                                    placeholder="Contexto..."></textarea>
                            </div>
                            <div className="container">
                                <div className="pt-5">
                                    <a href="#" className="btn btn-danger">Aprobar</a>                                    
                                </div>
                                <div className="pt-5">                        
                                    <a href="#" className="btn btn-danger">Rechazar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</div>
 
);
    }
    export default Aprobar;
     