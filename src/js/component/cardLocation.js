// Import React libraries
import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";

// Import Images
import portal from "../../img/portal.png"

// Import Styles
import "../../styles/components/card.css";

const Cardplace = ({place}) => {

    return (
      <div className="card">
        <img src="" className="card-img-top" alt="place Picture" />
        <div className="card-body">
          <div className="btnContainer" >
          <h5 className="card-title">{place.name}</h5>
          <button type="button" className="btn btn-outline-warning">
            <i className="fa-solid fa-heart-circle-plus"></i>
            </button>
          </div>
          <p className="card-text text-wrap">Type: {place.type}</p>
          <p className="card-text text-wrap">Dimension: {place.dimension}</p>
            <Link to="/learn-more/people" className="btn portal">
                <img src={portal} width="50" height="50"/>
            </Link>
        </div>
      </div>
    );
};

export default Cardplace