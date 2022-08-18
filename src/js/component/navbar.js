// Import React libraries
import React, { useState , useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import RAMTitle from "../../img/Rick-and-Morty.png"

// Import Styles
import "../../styles/components/navbar.css";

const Navbar = () => {
  const { store, actions } = useContext(Context);



  const favoritesCharacters = store.favoritesPerson.map((element , index) => {
      return <li key={index} className="favorite-item">
      <Link to={`/learnMorePeople/${element.id}`} className="text-white">
        {element.name}
      </Link>
    </li>
  })

  const favoritesLocations = store.favoritesLocation.map((element , index) => {
    return <li key={index} className="favorite-item">
    <Link to={`/learnMoreLocation/${element.id}`} className="text-white">
      {element.name}
    </Link>
  </li>
})

	return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={RAMTitle} alt="" width="150" height="80" />
            </Link>
          <div className="btn-group">
          <button type="button" className="btn btn-primary btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </button>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
              <li className="favorite-item fw-bold fs-5 favorite-title">Characters</li>
              {favoritesCharacters}
              <li><hr className="dropdown-divider"/></li>
              <li className="favorite-item fw-bold fs-5 favorite-title">Locations</li>
              {favoritesLocations}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
