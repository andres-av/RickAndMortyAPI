// Import React libraries
import React , { useEffect , useContext } from "react";
import { useParams } from "react-router-dom"
import { Context } from "../store/appContext";

// Import Styles
import "../../styles/views/learnMore.css";

// Import components
import LocationPictures from "../component/locationPictures"

const LearnMoreLocation = () => {
  const { store, actions } = useContext(Context);

    // get Id from URL to fetch the specific character info
    const params = useParams();
  
    // get specific character to show their details
    useEffect(() => {
      actions.fetchPlace(params)
    }, []);

  return (
    <>
      <div className="mainContainer">
        <div className="card mb-3 border-none">
          <div className="row g-0">
            <div className="col-md-4">
              <LocationPictures number={params.id} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">{store.place.name}</h1>
                <p className="card-text">Residents: {store.place.residents}</p>
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
