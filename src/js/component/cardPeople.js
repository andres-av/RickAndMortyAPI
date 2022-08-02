// Import React libraries
import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";

// Import Styles
import "../../styles/components/card.css";

export const CardPeople = (num) => {

  const [person, setPerson] = useState({});
  
  const getPeople = () => {fetch(`https://www.swapi.tech/api/people/${num}`)
    .then((resp) => resp.json())
    .then((data) => setPerson(data))
    .catch(err => console.error(err))
  }

  useEffect(() => {
    getPeople();
  }, []);

    return (
      <>
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">person.name</h5>
            <p className=" text-wrap">Gender: person.gender</p>
            <p className="card-text text-wrap">Hair Color: person.hair_color</p>
            <p className="card-text text-wrap">Eye Color: person.eye_color</p>
            <div className="btnContainer">
              <Link to="/learn-more/people" className="btn btn-outline-primary" num={3}>
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