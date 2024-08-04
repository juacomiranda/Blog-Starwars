import React, {useContext} from 'react';
import { Context } from '../store/appContext';


export const Card = ({ title, images, modalId, uid }) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="col">
            <div className="card">
                <img src={images} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target={`#${modalId}`}
                        onClick={()=> actions.getPeopleId(uid)}
                    >
                        Ver Detalles
                    </button>
                </div>
            </div>
        </div>
    );
};
