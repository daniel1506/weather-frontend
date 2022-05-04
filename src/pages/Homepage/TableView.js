import React, { useState, useEffect, useContext } from "react";
//import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import CityTable from "../../components/CityTable";
import get from "../../lib/get";
import GeneralContext from "../../store/general-context";


function TableView() {
  const [cityList, setCityList] = React.useState([]);
  const generalCtx = React.useContext(GeneralContext);

  useEffect(() => {
    console.log("Getting weather info");
    //get("https://weathering-with-me-g12.herokuapp.com/location").then((r) => {
    get("https://develop-2720.herokuapp.com/location").then((r) => { 
      r.pop();   
      setCityList(r);
    });
  }, [generalCtx.eventEventModified]);

  return (
    <>
      {/* <InfoTable info={cityList}/> */}
      <CityTable info={cityList} />
    </>
  );
}

// function InfoTable(props) {

//   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
//     props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <>    
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>City</TableCell>
//               <TableCell align="right">Country</TableCell>
//               <TableCell align="right">Temperature&nbsp;(C)</TableCell>
//               <TableCell align="right">Wind Speed&nbsp;(kph)</TableCell>
//               <TableCell align="right">Wind Direction</TableCell>
//               <TableCell align="right">Humidity&nbsp;(%)</TableCell>
//               <TableCell align="right">Precipitation&nbsp;(mm)</TableCell>
//               <TableCell align="right">Visibility&nbsp;(km)</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {props.info.map((info) => (
//               <TableRow
//                 key={info.city}
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">
//                   {info.city}
//                 </TableCell>
//                 <TableCell align="right">{info.country.temp_c}</TableCell>
//                 <TableCell align="right">{info.weather.wind_kph}</TableCell>
//                 <TableCell align="right">{info.weather.wind_dir}</TableCell>
//                 <TableCell align="right">{info.weather.humidity}</TableCell>
//                 <TableCell align="right">{info.weather.precip_mm}</TableCell>
//                 <TableCell align="right">{info.weather.vis_km}</TableCell>             
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </>
//   );
// }

export default TableView;
