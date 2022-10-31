import React from "react";
import "../css/Publicar.css"

function Publicar (){
    return (
 <div className="seccion">
     <div class="container">
        <h3 class="text-black">Publicar</h3>
        <hr class="bg-light"></hr>
    </div>
    <div class="container mb-3">
        <div class="row">
            <div class="col-md-4">
                <div class="dropdown">
                    <a class="btn btn-info dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Seleccionar Categoria
                    </a>

                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
                        <div class="fNormal">
                            <li><a class="dropdown-item" href="#">Categoria1</a></li>
                            <li><a class="dropdown-item" href="#">Categoria2</a></li>
                            <li><a class="dropdown-item" href="#">Categoria3</a></li>
                            <li><a class="dropdown-item" href="#">Categoria4</a></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="container bg-info rounded ">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ">
                    <div class="row">
                        <div class="col-6">
                            <div class="md-3 mt-2">
                                <label for="exampleFormControlInput1" class="form-label">Titulo</label>
                                <input class="form-control bg-dark text-white" id="exampleFormControlInput1"
                                    placeholder="Menos de 50 caracteres"></input>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 mt-2">
                        <label for="exampleFormControlTextarea1" class="form-label">Resumen</label>
                        <textarea class="form-control bg-dark text-white" rows="4" placeholder="Menos de 500 caracteres"></textarea>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card col-mb-3 card text-white bg-dark rounded mt-4 align-items-center">
                        <div class="card-body">
                            <h5 class="card-title">Multimedia</h5>
                        </div>
                        <img src="" class="card-img-top" alt="..."></img>
                        <div class="py-2">
                            <a href="#" class="btn btn-success">Subir</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="bg-dark"></hr>
            <div class="row pb-4 ">
                <div class="col-8">

                </div>
                <div class="d-grid gap-2 col-md-2 mx-auto mt-3">
                    <button type="button" class="btn btn-success ">Publicar</button>
                </div>
            </div>
        </div>
    </div>
 </div>
 
        );
    }
    export default Publicar;
     