import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/cards";


export const Personajes = () => {
    const {store, actions} = useContext (Context);

  return (  
    <div className="container flex-fill text-center">
        <h1>Personajes</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-1 mb-5">
                {store.personajes.map((obj, index) => (  
                    <Card nombre = {obj.name} />
                ))}
            </div>
    </div>
  );
};

