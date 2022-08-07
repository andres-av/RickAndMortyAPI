// Import React libraries
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import RAMTitle from "../../img/Rick-and-Morty.png"

// Import Styles
import "../../styles/components/navbar.css";

const Navbar = () => {
  const { store, actions } = useContext(Context);

  const addFavorite = (e) => {
    return (
      <Link className="dropdown-item" to="">{e.currentTarget.person.name}</Link>
    )
  }

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
                <Link className="dropdown-item" to="#">
                  Ejemplo de Favorito
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
