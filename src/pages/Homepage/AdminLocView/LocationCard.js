import { React, useState } from "react";
import { Box, Grid, TextField, Card, ListItem, ListItemText, ListItemButton } from "@mui/material";
import SubmitButton from "../../../components/SubmitButton";
import ShortText from "../../../components/ShortText";
import put from "../../../lib/put";
import GeneralContext from "../../../store/general-context";
import { useContext } from "react";
function LocationCard(props) {
  const generalCtx = useContext(GeneralContext);
  const [updating, setUpdating] = useState(false);
  const [updateFailed, setUpdateFailed] = useState(undefined);
  const [lat, setLat] = useState(NaN);
  const [lng, setLng] = useState(NaN);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const updateLocation = () => {
    let data = { lat: parseInt(lat), long: parseInt(lng), cityName: cityName, country: country };
    setUpdating(true);
    console.log("updating");
    console.log(`${process.env.REACT_APP_BACKEND_BASE_URL}/location/${props.name}`);
    let x = props.name;
    put(`${process.env.REACT_APP_BACKEND_BASE_URL}/location/${x}`, data)
      .then((result) => {
        console.log(result);
        if (result.status != 200) {
          setUpdateFailed(true);
        } else {
          setUpdateFailed(false);
          generalCtx.handleLocationsModified();
        }
        setUpdating(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Card sx={{ my: 2 }}>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#simple-list">
          <ListItemText
            primary={
              <Grid container>
                <Grid item md={4} xs={12}>
                  <Box
                    height="100%"
                    display="flex"
                    alignItems="center"
                    flexDirection={{ xs: "column", md: "row" }}
                    justifyContent={{ xs: "center", md: "start" }}
                    gap="3px"
                  >
                    <ShortText>{`${props.name} `}</ShortText>
                    <ShortText variant="body">{`lat:${props.lat} lng:${props.lng}`}</ShortText>
                  </Box>
                </Grid>
                <Grid item md={8} xs={12}>
                  <Box
                    display="flex"
                    flexDirection={{ xs: "column", md: "row" }}
                    justifyContent={{ xs: "end" }}
                    gap="10px"
                  >
                    <TextField
                      label="new name"
                      onChange={(e) => {
                        setCityName(e.target.value);
                      }}
                    />
                    <TextField
                      label="new lat"
                      onChange={(e) => {
                        setLat(e.target.value);
                      }}
                    />
                    <TextField
                      label="new lng"
                      onChange={(e) => {
                        setLng(e.target.value);
                      }}
                    />
                    <SubmitButton loading={updating} error={updateFailed} onClick={updateLocation}>
                      Update
                    </SubmitButton>
                  </Box>
                </Grid>
              </Grid>
            }
          ></ListItemText>
        </ListItemButton>
      </ListItem>
    </Card>
  );
}

export default LocationCard;
