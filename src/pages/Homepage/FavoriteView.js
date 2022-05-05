import React, { useState, useEffect, useContext } from "react";
import CityTable from "../../components/CityTable";
import get from "../../lib/get";
import GeneralContext from "../../store/general-context";

function FavoriteView() {

  const [favouriteList, setFavouriteList] = React.useState([]);
  const generalCtx = React.useContext(GeneralContext);

  useEffect(() => {
    get("https://weathering-with-me-g12.herokuapp.com/location").then((r) => {         
      setFavouriteList(
        r.filter((city) => {
          return city.isFavourite;
        })
      );
    });
  }, [generalCtx.eventEventModified]);

  return (
    <>
      <CityTable info={favouriteList} />
    </>
  );
}

export default FavoriteView;
