import React from 'react';

export const Card = ({ title, images, modalId, onClick }) => {
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
                        onClick={onClick}
                    >
                        Ver Detalles
                    </button>
                </div>
            </div>
        </div>
    );
};
