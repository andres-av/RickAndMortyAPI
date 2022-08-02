// Import React libraries
import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";

// Import Styles
import "../../styles/components/card.css";

export const CardPlanet = (num) => {

  const [planet, setPlanet] = useState({});

  const getPlanet = () => {fetch(`https://www.swapi.tech/api/people/${num}`)
    .then((resp) => resp.json())
    .then((data) => setPlanet(data))
    .catch(err => console.error(err))
  }

  useEffect(() => {
    getPlanet();
  }, []);

    return (
      <>
       <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">planet.name</h5>
            <p className=" text-wrap">Population: person.population</p>
            <p className="card-text text-wrap">Terrain: person.terrain</p>
            <div className="btnContainer">
              <Link to="/learn-more/planet" className="btn btn-outline-primary">
                Learn More!
              </Link>
              <button type="button" className="btn btn-outline-warning">
              <i className="fa-solid fa-heart-circle-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </>
    );
};