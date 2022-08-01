import React from "react";
import { Link } from "react-router-dom";
import starwars from "../../img/starwars-helmet.png"

// Import Styles
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
    <>
      <nav className="navbar bg-light">
        <div className="container">
          <div className="titleContainer">
            <a className="navbar-brand" href="#">
              <img src={starwars} alt="" width="55" height="55" />
            </a>
            <p className="navbarTitle">Star Wars</p>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-danger">
              Favorites
            </button>
            <button
              type="button"
              className="btn btn-danger dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Ejemplo de Favorito
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
