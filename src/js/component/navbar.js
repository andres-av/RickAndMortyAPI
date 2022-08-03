import React from "react";
import { Link } from "react-router-dom";
import RAMTitle from "../../img/Rick-and-Morty.png"

// Import Styles
import "../../styles/components/navbar.css";

const Navbar = () => {
	return (
    <>
      <nav className="navbar bg-light">
        <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={RAMTitle} alt="" width="150" height="80" />
            </Link>
          <div className="btn-group">
            <button type="button" className="btn btn-primary">
              Favorites
            </button>
            <button
              type="button"
              className="btn btn-primary dropdown-toggle dropdown-toggle-split"
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

export default Navbar;
