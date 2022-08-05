// Import React libraries
import { element } from "prop-types";
import React, { useState , useEffect } from "react";

const LearnMoreEpisodes = ({episode}) => {
    
  const [ episodeName , setEpisodeName ] = useState([]);
 

  // useEffect(() => {
  //   if(episode){
  //     episode.forEach((element) => {
  //       fetch(element)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           setEpisodeName([...episodeName, data.name]);
  //           console.log(data.name);
  //         });
  //     });
  //   }
  // }, []);

  // const episodeNames = episodeName.map((episode , index) => <li key={index}>{episode.name}</li>) 

  return(
    //  {episodeNames}
    <li></li>
)}

export default LearnMoreEpisodes