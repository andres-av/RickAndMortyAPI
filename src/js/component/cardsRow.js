// Import React libraries
import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";

// Import Styles
import "../../styles/components/cardsRow.css";

// Import Components
import { CardPeople } from "./cardPeople";
import { CardVehicle } from "./cardVehicle";
import { CardPlanet } from "./cardPlanet";


export const CardsRow = () => {

    return (
      <>
        <h2 className="row-title">Characters</h2>
        <div className="horizontal-container" id="style-2">
          <CardPeople num={1}/>
        </div>
        <h2 className="row-title">Planets</h2>
        <div className="horizontal-container">
          <CardPlanet num={1}/>
        </div>
        <h2 className="row-title">Vehicles</h2>
        <div className="horizontal-container">
          <CardVehicle num={1}/>
        </div>
      </>
    );
};