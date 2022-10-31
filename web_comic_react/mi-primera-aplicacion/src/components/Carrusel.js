import React from 'react'
import "../css/Carrusel.css";



export default function Carrusel() {
  return (

    <div className='container mt-4 mb-5 pb-5'>
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="imagen-carrusel" src={require("../img/Bleach.png")} alt= "foto de Berserk" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Nuevo Manga</h5>
                            <p>Monster</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <img className="imagen-carrusel" src={require("../img/berserk.jpg")} alt= "foto de Berserk" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Manga popular</h5>
                            <p>Vinland Saga</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <img className="imagen-carrusel" src={require("../img/berserk.jpg")} alt= "foto de Berserk" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Manga </h5>
                            <p>Black Lagoon</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>

            </div>
  )}