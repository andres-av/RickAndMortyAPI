// Import React libraries
import React from "react";

// Import Images
import  one  from "../../img/locations/one.webp";
import  two  from "../../img/locations/two.png";
import  three  from "../../img/locations/three.webp";
import  four  from "../../img/locations/four.webp";
import  five  from "../../img/locations/five.jpg";
import  six  from "../../img/locations/six.webp";
import  seven  from "../../img/locations/seven.webp";
import  eight  from "../../img/locations/eight.webp";
import  nine  from "../../img/locations/nine.jpg";
import  ten  from "../../img/locations/ten.jpg";
import  eleven  from "../../img/locations/eleven.webp";
import  twelve  from "../../img/locations/twelve.webp";
import  thirteen  from "../../img/locations/thirteen.webp";
import  fourteen  from "../../img/locations/fourteen.webp";
import  fifteen  from "../../img/locations/fifteen.webp";
import  sixteen  from "../../img/locations/sixteen.webp";
import  seventeen  from "../../img/locations/seventeen.png";
import  eighteen  from "../../img/locations/eighteen.jpg";
import  nineteen  from "../../img/locations/nineteen.webp";
import  twenty  from "../../img/locations/twenty.webp";

const LocationPictures = ({number}) => {
    const index = number-1;
    const num =
      [one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen,twenty];

    const numToName = num[index];

    return(<img src={numToName} className="card-img-top" alt="Location Picture" height="180"/>)
}

export default LocationPictures