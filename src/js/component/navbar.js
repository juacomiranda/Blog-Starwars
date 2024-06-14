import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
			<nav className="navbar navbar-dark bg-dark mb-3 px-5">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Blog de Starwars</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Favoritos</button>
					</Link>
				</div>
			</nav>
	);
};
