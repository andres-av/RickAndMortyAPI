// Import React libraries
import React , { useState, useEffect , useContext } from "react";
import { useParams } from "react-router-dom"
import { Context } from "../store/appContext";

// Import Styles
import "../../styles/views/learnMore.css";

const LearnMorePeople = () => {
  const { store, actions } = useContext(Context);
  const [episodeNames , setEpisodeNames] = useState([]);

  // get Id from URL to fetch the specific character info
  const params = useParams();
  
  // get specific character to show their details
  useEffect(() => {
    const response = actions.fetchPerson(params).then((data) => {
      if(data){
        listOfPersonEpisodesURL()
      }
    })
  }, []);

  const listOfPersonEpisodesURL = () => {
    const episodes = store.person.episode;
    episodes.forEach(async element => {
      let response = await fetch(element)
      let data = await response.json();
      setEpisodeNames(current => [...current , data])
    });
  };

  return (
    <>
    <div className="mainContainer">
    <div className="card mb-3 border-none">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={store.person.image} className="img-fluid rounded-start my-5" alt="Character Image"  />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">{store.person.name}</h1>
            <h4>Episodes where {store.person.name} appears:</h4>
            <ol className="card-text two-colums">
              {episodeNames.map((element , index) => {
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
            <h4>{store.person.name}</h4>
        </div>
        <div className="moreInfo">
            <h4>Status</h4>
            <h4>{store.person.status}</h4>
        </div>
        <div className="moreInfo">
            <h4>Species</h4>
            <h4>{store.person.species}</h4>
        </div>
        <div className="moreInfo">
            <h4>Gender</h4>
            <h4>{store.person.gender}</h4>
        </div>
    </div>
  </div>
  </>
  )

  };

  export default LearnMorePeople