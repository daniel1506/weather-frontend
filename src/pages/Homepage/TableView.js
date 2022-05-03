import React, { useState, useEffect, useContext } from "react";
import CityCard from "../../components/CityCard";
import GeneralContext from "../../store/general-context";
import get from "../../lib/get";
function TableView() {
  const [cityList, setCityList] = React.useState([]);
  const generalCtx = React.useContext(GeneralContext);

  useEffect(() => {
    console.log("Getting weather info");
    get("https://rfriend.herokuapp.com/api/user/browse").then((r) => {
      //setCityList();
      console.log();
    });
  }, [generalCtx.eventEventModified]);

  return (
    <></>
    // <Container>
    //   <Grid container spacing={"20px"}>
    //     {cityList.map((e, index) => {
    //       return (
    //         <Grid key={index} item xs={12} sm={6} md={3}>
    //           <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    //             <CityCard
    //               eventId={e.id}
    //               eventName={e.name}
    //               hostId={e.ownerId}
    //               eventTime={e.startsAt}
    //               isJoined={e.isEventJoined}
    //               isLiked={e.isEventLiked}
    //               photoUrl={e.photoUrl}
    //               host={e.owner}
    //               eventLocation={e.location}
    //               eventCategory={e.category}
    //               participants={e.participants}
    //               maxParticipants={e.maxParticipants}
    //               eventRemark={e.remarks}
    //               eventComment={e.comments}
    //             />
    //           </Box>
    //         </Grid>
    //       );
    //     })}
    //   </Grid>
    // </Container>
  );
}

export default TableView;
