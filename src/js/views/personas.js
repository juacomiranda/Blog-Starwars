import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { Card } from '../component/cards';
import { Detalles } from '../component/detalles';

export const Personajes = () => {
    const { store, actions } = useContext(Context);
   
    

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
                                uid= {obj.uid}
                            /> 
                            <Detalles
                                    id={modalId}
                                    nombre={store.peopleid.name}
                                    genero={store.peopleid.gender}
                                    estatura={store.peopleid.height}
                                    pelo={store.peopleid.hair_color}
                                    ojos={store.peopleid.eye_color}
                                    nacimiento={store.peopleid.birth_year}
                                    images={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}       
                    />  
                        </React.Fragment>
                    );

                    
                           
                })}
                
            </div>
        </div>
    );
};
