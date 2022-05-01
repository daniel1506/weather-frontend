import React from "react";
import Navbar from "../../components/Navbar";
import { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";
import Profile from "../../components/Profile";
import GeneralContext from "../../store/general-context.js";
import TableView from "./TableView.js";
import MapView from "./MapView.js";
import FavoriteView from "./FavoriteView.js";
import AdminView from "./AdminView/AdminView.js";
function Homepage() {
  const generalCtx = useContext(GeneralContext);
  return (
    <>
      <Navbar />
      {(generalCtx.viewSelected === "tableView" || generalCtx.viewSelected === "") && <TableView />}
      {generalCtx.viewSelected === "mapView" && <MapView />}
      {generalCtx.viewSelected === "adminView" && <AdminView />}
      {generalCtx.viewSelected === "favourites" && <FavoriteView />}
    </>
  );
}

export default Homepage;
