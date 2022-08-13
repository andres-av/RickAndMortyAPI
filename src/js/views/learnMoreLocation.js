// Import React libraries
import React , { useState, useEffect , useContext } from "react";
import { useParams } from "react-router-dom"
import { Context } from "../store/appContext";

// Import Styles
import "../../styles/views/learnMore.css";

// Import components
import LocationPictures from "../component/locationPictures"

const LearnMoreLocation = () => {
  const { store, actions } = useContext(Context);
  const [residentsList , setResidentsList] = useState([]);

    // get Id from URL to fetch the specific character info
    const params = useParams();
  
    // get specific place to show their details
    useEffect(() => {
      const response = actions.fetchPlace(params).then((data) => {
        if(data){
          listOfResidents()
        }
      })
    }, []);

    const listOfResidents = () => {
      const residents = store.place.residents;
      residents.forEach(async element => {
        let response = await fetch(element)
        let data = await response.json();
        setResidentsList(current => [...current , data])
      });
    };

  return (
    <>
      <div className="mainContainer">
        <div className="card mb-3 border-none">
          <div className="row g-0">
            <div className="col-md-4">
              <div  className="m-5">
              <LocationPictures number={params.id} className="ms-3 mt-5"/>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body mt-5">
                <h1 className="card-title">{store.place.name}</h1>
                {/* <p className="card-text">Residents: {store.place.residents}</p> */}
                <h4>{store.place.name} residents:</h4>
                <ol className="card-text two-colums">
                {residentsList.map((element , index) => {
                return <li key={index}>{element.name}</li>
              })}
            </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="moreInfoContainer">
          <div className="moreInfo">
            <h4>Name</h4>
            <h4>{store.place.name}</h4>
          </div>
          <div className="moreInfo">
            <h4>Type</h4>
            <h4>{store.place.type}</h4>
          </div>
          <div className="moreInfo">
            <h4>Dimension</h4>
            <h4>{store.place.dimension}</h4>
          </div>
        </div>
      </div>
    </>
  );

  };

  export default LearnMoreLocation
