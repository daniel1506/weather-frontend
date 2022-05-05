import React, { useState, useEffect, useContext } from "react";
import CityTable from "../../components/CityTable";
import get from "../../lib/get";
import GeneralContext from "../../store/general-context";


function TableView() {
  const [cityList, setCityList] = React.useState([]);
  const generalCtx = React.useContext(GeneralContext);

  useEffect(() => {
    console.log("Getting weather info");
    get("https://weathering-with-me-g12.herokuapp.com/location").then((r) => {
      //r.pop();   
      setCityList(r);
    });
  }, [generalCtx.eventEventModified]);

  return (
    <>
      <CityTable info={cityList} />
    </>
  );
}

export default TableView;
