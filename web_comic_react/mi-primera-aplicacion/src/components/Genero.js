import React from "react";
import "../css/Genero.css"

function Genero (){
    return (    

<div className="barra">
    <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="Barra">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="container"> 
                        <div className="gen"> 
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><h5 className="h">Romance</h5></a>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><h5 className="h">Terror</h5></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><h5 className="h">Fantasia</h5></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</div>
        );
    }
    export default Genero;
    