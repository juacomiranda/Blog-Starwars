import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Link} from 'react-router-dom';

export const Home = () => (
		<div className="container flex-fill text-center">
			<Link to='/personajes'><h1 className="mt-5">Personas</h1></Link>
			<Link to='/vehiculos'><h1 className="mt-5">Vehículos</h1></Link>
			<Link to='/planetas'><h1 className="mt-5">Planetas</h1></Link>
		</div>
);
