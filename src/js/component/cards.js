import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

export const Card = () => (
    <div className="card" style={{ width: '18rem' }}>
        <img src={rigoImage} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Personajes</h5>
            <a href="#" className="btn btn-danger">Saber más</a>
        </div>
    </div>
);
