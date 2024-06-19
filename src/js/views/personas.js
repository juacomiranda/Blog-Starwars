import React from "react";
import { Card } from "../component/cards";


export const Personajes = () => {
  return (  
    <div className="container flex-fill text-center">
        <h1>Personajes</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-1 mb-5">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
        </div>
    </div>
  );
};

