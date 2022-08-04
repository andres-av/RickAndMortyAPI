// Import React libraries
import React, { useState , useEffect } from "react";

// Import Styles
import "../../styles/components/cardsRow.css";

// Import Components
import CardPeople  from "./cardPeople";
import CardLocation  from "./cardLocation";


const CardsRow = () => {

  // Get people for Characters row
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then(data => {
      setPeople(data.results)
    })
  }, [])
  
  const characters = people.map((person) => <CardPeople person={person} key={person.id}/>)

    // Get location for Locations row
  const [location, setLocation] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
    .then((response) => response.json())
    .then(data => {
      setLocation(data.results)
    })
  }, [])
  
  const places = location.map((place) => <CardLocation place={place} key={place.id}/>)

    return (
      <div className="background">
        <h2 className="row-title">Characters</h2>
        <div className="horizontal-container" id="style-2">
          {characters}
        </div>
        <h2 className="row-title">Locations</h2>
        <div className="horizontal-container" id="style-3">
          {places}
        </div>
      </div>
    );
};

export default CardsRow