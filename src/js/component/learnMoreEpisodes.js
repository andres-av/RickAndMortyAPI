// Import React libraries
import { element } from "prop-types";
import React, { useState , useEffect } from "react";

const LearnMoreEpisodes = (episode) => {
    const [ episodeName , setEpisodeName ] = useState([]);

    const matrixEpisode = Object.keys(episode)
    .map(function(key) {
        return episode[key];
    });
// episodeArr is a matrix with the list of all episodes on position 0, so arrayOfEpisodes flattens the matrix into a 1 level array
    const arrayOfEpisodes = matrixEpisode.flat();

    useEffect(() => {
      arrayOfEpisodes.forEach((element) => {
        fetch(element)
          .then((response) => response.json())
          .then((data) => {
            setEpisodeName(data.name);
          });
      });
    }, []);

    return(
            <li>{episodeName}</li>
)}

export default LearnMoreEpisodes