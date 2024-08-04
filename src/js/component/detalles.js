import React, {useContext} from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import '../../styles/home.css';



export const Detalles = (props) => {
    const {store, action} = useContext (Context);

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
                                    Nombre: {props.nombre}<br/>
                                    Genero: {props.genero}<br/>
                                    Estatura: {props.estatura}<br/>
                                    Color de pelo: {props.pelo}<br/>                                    
                                    Color de ojos: {props.ojos}<br/>                                    
                                    Año de nacimiento: {props.nacimiento}<br/>
                                    Multitud: {props.crew}<br/>                                                                      
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