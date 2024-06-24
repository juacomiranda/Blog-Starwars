import React, {useContext}  from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/cards";

export const Cars = () => {
    const {store, actions} = useContext (Context);

    return (  
      <div className="container flex-fill text-center">
          <h1>Vehículos</h1>
              <div className="row row-cols-1 row-cols-md-3 g-4 mt-1 mb-5">
                  {store.vehiculos.map((obj, index) => (  
                      <Card title = {obj.name} />
                  ))}
              </div>
      </div>
    );

};
