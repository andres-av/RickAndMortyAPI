// Import React libraries
import React , { useState , useEffect } from "react";
import {Link , useParams } from "react-router-dom"

// Import Styles
import "../../styles/views/learnMore.css";
// Import components
import LearnMoreEpisodes from "../component/learnMoreEpisodes";

const LearnMorePeople = () => {

  // get Id from URL to fetch the specific character info
  let params = useParams();

  const [person, setPerson] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
    .then((resp) => resp.json())
    .then(data => setPerson(data))
    .catch(err => console.error(err))
  }, []);

  // // Get all episodes to display the ones in which the specific character appears
  const episodeList = []
  episodeList.push(person.episode)

  const episodeNames = episodeList.map((episode , index) => <LearnMoreEpisodes episode={episode} key={index} />)  

  return (
    <>
    <div className="mainContainer">
    <div className="card mb-3 border-none">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={person.image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">{person.name}</h1>
            <ul className="card-text">
              {episodeNames}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="moreInfoContainer">
        <div className="moreInfo">
            <h4>Name</h4>
            <h4>{person.name}</h4>
        </div>
        <div className="moreInfo">
            <h4>Status</h4>
            <h4>{person.status}</h4>
        </div>
        <div className="moreInfo">
            <h4>Species</h4>
            <h4>{person.species}</h4>
        </div>
        <div className="moreInfo">
            <h4>Gender</h4>
            <h4>{person.gender}</h4>
        </div>
    </div>
  </div>
  </>
  )

  };

  export default LearnMorePeople