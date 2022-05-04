import React from "react";
import { useParams } from "react-router-dom";
function LocationView() {
  const { id } = useParams();
  return <div>LocationView, current locationId:{id}</div>;
}

export default LocationView;
