import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import '../../styles/home.css';



export const Detalles = (props) => {
    

    return (
        <div className="modal" id={props.id} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                    <img src={props.images} className="modal-img float-start" alt="personaje"></img>                                </div>
                                <div className="col">
                                    {props.contenido}
                                    {props.title}
                                    {props.year}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary">Guardar Favoritos</button>
                    </div>
                </div>
            </div>
        </div>
    );
};