// Import React libraries
import React from "react";
import { Link } from "react-router-dom";

// Import Images
import portal from "../../img/portal.png"

// Import components
import LocationPictures from "./locationPictures"

// Import Styles
import "../../styles/components/card.css";

const Cardplace = ({place}) => {
  
    return (
      <div className="card">
        <LocationPictures number={place.id}/>
        <div className="card-body">
          <h5 className="card-title text-wrap">{place.name}</h5>
          <p className="card-text text-wrap">Type: {place.type}</p>
          <p className="card-text text-wrap">Dimension: {place.dimension}</p>
          <div className="btnContainer mt-4">
            <Link to={`/learnMoreLocation/${place.id}`} className="btn portal">
              <img src={portal} width="50" height="50" />
            </Link>
            <button type="button" className="btn btn-outline-warning">
              <i className="fa-solid fa-heart-circle-plus"></i>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Cardplace