import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import get from "../../lib/get";
import GeneralContext from "../../store/general-context";

function LocationView() {
  const { cityName } = useParams();
  const [city, setCity] = useState([{}]);
  const [commentlist, setCommentlist] = useState([{}]);
  const generalCtx = React.useContext(GeneralContext);

  useEffect(() => {
    console.log("Getting city weather info");
    get("https://weathering-with-me-g12.herokuapp.com/location/"+cityName).then((res)=>{
      console.log(res);
      setCity(res);
    });
    console.log("Getting comments");
    get("https://weathering-with-me-g12.herokuapp.com/location/"+cityName+"/comments").then((res)=>{
      console.log(res);
      setCommentlist(res);
    });
  }, [generalCtx.eventModified, cityName]);

  return (
    <div>
      LocationView, current cityName:{cityName}
      <br/>
      cityName : {city.name}
      <br/>
      cityCountry : {city.country}
      <br/>
      cityLatitude : {city.lat}
      <br/>
      cityLongtitude : {city.long}
      <br/>
      <br/>
      Comment section: {commentlist.map((comment)=>{
        return <div>
          Author: {comment.author}
          <br/>
          Comment: {comment.text}
        </div>})}
    </div>
  )
}

export default LocationView;
