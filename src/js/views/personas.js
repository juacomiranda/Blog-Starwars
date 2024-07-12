import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { Card } from '../component/cards';
import { Detalles } from '../component/detalles';

export const Personajes = () => {
    const { store, actions } = useContext(Context);
    const [selectedPersonId, setSelectedPersonId] = useState(null);

    const handleCardClick = (id) => {
        setSelectedPersonId(id);
        actions.getPeopleId(id);
    };

    useEffect (()=>{
        console.log(store.peopleid)
    },[])

    return (
        <div className="container flex-fill text-center">
            <h1>Personajes</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-1 mb-5">
                {store.personajes.map((obj, index) => {
                    const modalId = `modal-${index + 1}`;
                    return (
                        <React.Fragment key={index}>
                            <Card
                                title={obj.name}
                                images={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
                                modalId={modalId}
                                onClick={() => handleCardClick(obj.uid)} // Asegúrate de pasar el ID correcto
                            />
                            <Detalles
                                id={modalId}
                                title={store.peopleid ? store.peopleid.name : ""}
                                contenido="Hola"
                                images={store.peopleid ? `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg` : ""}
                                year={store.peopleid ? store.peopleid.birth_year : ""}
                            />
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};
