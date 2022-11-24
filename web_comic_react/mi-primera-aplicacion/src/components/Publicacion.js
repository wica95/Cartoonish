
import React from "react";


function Publicacion (){
    return (

 <div className="seccion bg-dark">

    <div className="container">
        <div className="">
            <h1 className=" text-white ">Titulo</h1>
            <hr className="text-white"></hr>
        </div>
       
        <div className="">

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <figure>
            <img className="imagen-carta"
            src={require("../img/solo_lev.jpg")}
            alt= "foto de Berserk" />
            </figure>
                    </div>
                    <div className="carousel-item">
                    <figure>
            <img className="imagen-carta"
            src={require("../img/solo_lev.jpg")}
            alt= "foto de Berserk" />
            </figure>
                    </div>
                    <div className="carousel-item">
                    <figure>
            <img className="imagen-carta"
            src={require("../img/solo_lev.jpg")}
            alt= "foto de Berserk" />
            </figure>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div className=" mt-3">
           
            <hr className="text-white"></hr>
            <h4 className=" text-white">Comentarios</h4>
            <div className="">
                <table className="table text-white ">
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
                    <div className="form-floating mt-4 ">
                        <textarea className="form-control bg-dark text-white" placeholder="Leave a comment here"
                            id="floatingTextarea2" ></textarea>
                        <label htmlFor="floatingTextarea2" className="text-white">Escribe un comentario</label>
                        <div className="text-end">
                            <input type="submit" value="Comentar" className="btn btn-danger mt-2"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <hr className="text-white"></hr>
    </div>


 </div>
        );
    }
    export default Publicacion;
     