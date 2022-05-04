import React, { useState, useEffect, useContext } from "react";
//import CityCard from "../components/CityCard";
import GeneralContext from "../store/general-context";

function TableView() {

  const [cityList, setCityList] = React.useState([]);
  const generalCtx = React.useContext(GeneralContext);

  useEffect(() => {
    console.log("Getting weather info");
    get("https://weathering-with-me-g12.herokuapp.com/").then((r) => {
      //setCityList();
      console.log(r);
    });
  }, [generalCtx.eventEventModified]);

  return (
    <>
      <InfoTable info={cityList}/>
    </>
  );
}

function InfoTable(props) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>City</TableCell>
              <TableCell align="right">Country</TableCell>
              <TableCell align="right">Temperature&nbsp;(C)</TableCell>
              <TableCell align="right">Wind Speed&nbsp;(kph)</TableCell>
              <TableCell align="right">Wind Direction</TableCell>
              <TableCell align="right">Humidity&nbsp;(%)</TableCell>
              <TableCell align="right">Precipitation&nbsp;(mm)</TableCell>
              <TableCell align="right">Visibility&nbsp;(km)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {props.info.city}
                </TableCell>
                <TableCell align="right">{props.info.country.temp_c}</TableCell>
                <TableCell align="right">{props.info.weather.wind_kph}</TableCell>
                <TableCell align="right">{props.info.weather.wind_dir}</TableCell>
                <TableCell align="right">{props.info.weather.humidity}</TableCell>
                <TableCell align="right">{props.info.weather.precip_mm}</TableCell>
                <TableCell align="right">{props.info.weather.vis_km}</TableCell>             
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableView;
