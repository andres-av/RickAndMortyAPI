// Import React libraries
import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";

// Import Styles
import "../../styles/components/card.css";

export const CardPeople = () => {

    return (
      <>
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Name</h5>
            <p className="card-text text-wrap">Gender:</p>
            <p className="card-text text-wrap">Hair Color:</p>
            <p className="card-text text-wrap">Eye Color:</p>
            <div className="btnContainer">
              <Link to="/learn-more" className="btn btn-outline-primary">
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