import React, { useState, useEffect, useContext } from "react";
import CityTable from "../../components/CityTable";
import get from "../../lib/get";
import GeneralContext from "../../store/general-context";
import { LinearProgress } from "@mui/material";
function TableView() {
  const [cityList, setCityList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const generalCtx = React.useContext(GeneralContext);

  useEffect(() => {
    console.log("Getting weather info");
    setLoading(true);
    get("https://weathering-with-me-g12.herokuapp.com/location?=true").then((r) => {
      setLoading(false);
      setCityList(r);
    });
  }, [generalCtx.eventModified]);

  return (
    <>
      {loading && <LinearProgress />}
      {!loading && <CityTable info={cityList} />}
    </>
  );
}

export default TableView;
