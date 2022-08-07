// Import React libraries
import React , { useEffect , useContext } from "react";
import { useParams } from "react-router-dom"
import { Context } from "../store/appContext";

// Import Styles
import "../../styles/views/learnMore.css";

// Import components
// import EpisodeListOnLearnMorePeople from "../component/episodeListOnLearnMorePeople";

const LearnMorePeople = () => {
  const { store, actions } = useContext(Context);

  // get Id from URL to fetch the specific character info
  const params = useParams();
  
  // get specific character to show their details
  useEffect(() => {
    actions.fetchPerson(params)
  }, []);

  const listOfPersonEpisodesURL = store.person.episode;
  
  console.log(listOfPersonEpisodesURL);

  // const listOfEpisodes = if(listOfPersonEpisodesURL){
  //  listOfPersonEpisodesURL.map((url , index) => <li key={index}>{url}</li>)
  // }

  return (
    <>
    <div className="mainContainer">
    <div className="card mb-3 border-none">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={store.person.image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">{store.person.name}</h1>
            <ul className="card-text">
              <li>Episodes where {store.person.name} appears:</li>
            {listOfPersonEpisodesURL}
            </ul>
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