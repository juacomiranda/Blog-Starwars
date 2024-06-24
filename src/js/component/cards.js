import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { useParams } from "react-router-dom";


export const Card = (props) => {
    const {theid} = useParams();
 
    return (
    <div className="col">
            <div className="card h-100">
                <img src={rigoImage} className="card-img-top" alt="personajes" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <a href="#" className="btn btn-danger">Saber más</a>
                </div>
            </div>   
            </div>
    );
};
