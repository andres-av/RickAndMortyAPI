// Import React libraries
import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";

// Import Styles
import "../../styles/components/card.css";

export const CardVehicle = (num) => {

  const [vehicle, setVehicle] = useState({});
  
  const getVehicle = () => {fetch(`https://www.swapi.tech/api/people/${num}`)
    .then((resp) => resp.json())
    .then((data) => setVehicle(data))
    .catch(err => console.error(err))
  }

  useEffect(() => {
    getVehicle();
  }, []);

    return (
      <>
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">vehicle.name</h5>
            <p className=" text-wrap">Passengers: vehicle.passengers</p>
            <p className="card-text text-wrap">Crew: vehicle.crew</p>
            <p className="card-text text-wrap">Consumables: vehicle.consumables</p>
            <div className="btnContainer">
              <Link to="/learn-more/vehicle" className="btn btn-outline-primary">
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