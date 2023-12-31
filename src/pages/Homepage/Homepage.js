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
      <TableView />
      <MapView />
      <AdminView />
      <FavoriteView />
    </>
  );
}

export default Homepage;
