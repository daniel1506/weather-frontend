import React from "react";
import { useParams } from "react-router-dom";
function LocationView() {
  const { cityName } = useParams();
  return <div>LocationView, current cityName:{cityName}</div>;
}

export default LocationView;
