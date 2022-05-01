import { React, useRef, useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { MarkEmailReadTwoTone } from "@mui/icons-material";
function Map(props) {
  const ref = useRef();
  const [map, setMap] = useState();
  useEffect(() => {
    setMap(new window.google.maps.Map(ref.current, {}));
  }, []);
  if (map) {
    map.setCenter(props.center);
    map.setZoom(props.zoom);
  }
  return (
    <div ref={ref} style={{ height: "100%" }} id="map">
      {/* {props.markers} */}
      {<Marker position={props.markersInfo[0]?.position} map={map} />}
    </div>
  );
}
function Marker(props) {
  const [marker, setMarker] = useState();
  useEffect(() => {
    setMarker(new window.google.maps.Marker({}));
  }, []);
  useEffect(() => {
    let markerOnClickListener;
    markerOnClickListener = marker?.addListener("click", () => {
      alert("hello");
    });
    return () => {
      if (marker && markerOnClickListener) {
        window.google.maps.event.removeListener(markerOnClickListener);
      }
    };
  }, [marker]);
  if (marker) {
    marker.setMap(props.map);
    marker.setPosition(props.position);
  }
}
const rootContainerStyle = (theme) => ({
  paddingTop: "16px",
  height: "calc(100vh - 80px)",
  display: "flex",
  gap: "16px",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
});

const mapContainerStyle = (theme) => ({
  flexGrow: 1,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "30%",
  },
});
function MapView() {
  const mapLoadingRender = (status) => {
    return <h1>{status}</h1>;
  };
  const [markersInfo, setMarkersInfo] = useState([{ position: { lat: 22.507017, lng: 114.127882 } }]);
  return (
    <Container sx={rootContainerStyle}>
      <Box sx={mapContainerStyle}>
        <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY} render={mapLoadingRender} style={{ height: "100%" }}>
          <Map center={{ lat: 22.507017, lng: 114.127882 }} zoom={15} markersInfo={markersInfo} />
        </Wrapper>
      </Box>
    </Container>
  );
}

export default MapView;
