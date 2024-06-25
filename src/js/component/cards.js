import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { useParams } from "react-router-dom";


export const Card = (props) => {
    const {theid} = useParams();
 
    return (
    <div className="col">
            <div className="card h-100">
                <img src={props.images} className="card-img-top" alt="personajes" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${props.modalId}`}>
                        Saber más
                    </button>
                </div>
            </div>   
            </div>
    );
};
