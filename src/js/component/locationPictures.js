// Import React libraries
import React from "react";

// Import Images
import  one  from "../../img/locations/one.png";
import  two  from "../../img/locations/two.png";
import  three  from "../../img/locations/three.png";
import  four  from "../../img/locations/four.png";
import  five  from "../../img/locations/five.jpg";
import  six  from "../../img/locations/six.png";
import  seven  from "../../img/locations/seven.png";
import  eight  from "../../img/locations/eight.png";
import  nine  from "../../img/locations/nine.jpg";
import  ten  from "../../img/locations/ten.jpg";
import  eleven  from "../../img/locations/eleven.png";
import  twelve  from "../../img/locations/twelve.png";
import  thirteen  from "../../img/locations/thirteen.png";
import  fourteen  from "../../img/locations/fourteen.png";
import  fifteen  from "../../img/locations/fifteen.png";
import  sixteen  from "../../img/locations/sixteen.png";
import  seventeen  from "../../img/locations/seventeen.png";
import  eighteen  from "../../img/locations/eighteen.jpg";
import  nineteen  from "../../img/locations/nineteen.png";
import  twenty  from "../../img/locations/twenty.png";

const LocationPictures = ({number}) => {
    const index = number-1;
    const num =
      [one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen,twenty];

    const numToName = num[index];

    return(<img src={numToName} />)
}

export default LocationPictures