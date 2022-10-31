
import React from "react";


function Publicacion (){
    return (

 <div className="seccion bg-dark">

    <div class="container">
        <div class="">
            <h1 class=" text-white ">Titulo</h1>
            <hr class="text-white"></hr>
        </div>
       
        <div class="">

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <figure>
            <img className="imagen-carta"
            src={require("../img/solo_lev.jpg")}
            alt= "foto de Berserk" />
            </figure>
                    </div>
                    <div class="carousel-item">
                    <figure>
            <img className="imagen-carta"
            src={require("../img/solo_lev.jpg")}
            alt= "foto de Berserk" />
            </figure>
                    </div>
                    <div class="carousel-item">
                    <figure>
            <img className="imagen-carta"
            src={require("../img/solo_lev.jpg")}
            alt= "foto de Berserk" />
            </figure>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class=" mt-3">
           
            <hr class="text-white"></hr>
            <h4 class=" text-white">Comentarios</h4>
            <div class="">
                <table class="table text-white ">
                    <tbody>
                        <tr>
                            <td><b>Username</b></td>
                        </tr>
                        <tr>
                            <td>
                                Soy un comentario generico dejado por un usuario generico.
                            </td>
                        </tr>
                    </tbody>
                </table>
                <form>
                    <div class="form-floating mt-4 ">
                        <textarea class="form-control bg-dark text-white" placeholder="Leave a comment here"
                            id="floatingTextarea2" ></textarea>
                        <label for="floatingTextarea2" class="text-white">Escribe un comentario</label>
                        <div class="text-end">
                            <input type="submit" value="Comentar" class="btn btn-danger mt-2"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <hr class="text-white"></hr>
    </div>


 </div>
        );
    }
    export default Publicacion;
     