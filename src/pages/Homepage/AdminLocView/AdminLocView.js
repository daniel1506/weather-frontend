import React from "react";
import { Box, Grid, Card, Container, TextField, Button, ListItem, ListItemText, ListItemButton } from "@mui/material";
import ShortText from "../../../components/ShortText";
import { useEffect, useState, useContext } from "react";
import get from "../../../lib/get";
import SubmitButton from "../../../components/SubmitButton";
import HorizontalFlex from "../../../layoutLib/HorizontalFlex";
import LocationCard from "./LocationCard";
import GeneralContext from "../../../store/general-context";
import CreateLocation from "./CreateLocation.js";
function AdminLocView() {
  const [locations, setLocations] = useState([{}]);
  const [locationsLoading, setLocationsLoading] = useState();
  const generalCtx = useContext(GeneralContext);
  useEffect(() => {
    get(`${process.env.REACT_APP_BACKEND_BASE_URL}/location`).then((result) => {
      if (result.status != 200) {
      } else {
        setLocations(result);
      }
    });
  }, [generalCtx.locationsModified]);
  return (
    <>
      <CreateLocation />
      <Container>
        {locations.map((location) => {
          return <LocationCard name={location.name} lat={location.lat} lng={location.long} />;
        })}
      </Container>
    </>
  );
}

export default AdminLocView;
