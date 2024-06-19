import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

export const Card = () => (
    <div className="col">
            <div className="card h-100">
                <img src={rigoImage} className="card-img-top" alt="personajes" />
                <div className="card-body">
                    <h5 className="card-title">Nombre</h5>
                    <a href="#" className="btn btn-danger">Saber más</a>
                </div>
            </div>   
            </div>
);
