import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import get from "../../lib/get";
import post from "../../lib/post";
import GeneralContext from "../../store/general-context";
import SubmitButton from "../../components/SubmitButton";
import { TextField, Box } from "@mui/material";
function LocationView() {
  const { cityName } = useParams();
  const [city, setCity] = useState([{}]);
  const [commentlist, setCommentlist] = useState([{}]);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitFailed, setSubmitFailed] = useState(undefined);
  const generalCtx = React.useContext(GeneralContext);
  const addComment = () => {
    let data = { text: comment };
    setSubmitting(true);
    post(`${process.env.REACT_APP_BACKEND_BASE_URL}/location/${cityName}/comments`, data)
      .then((result) => {
        setSubmitting(false);
        if (result.status != 200) {
          setSubmitFailed(true);
        } else {
          setSubmitFailed(false);
          generalCtx.handleEventModified();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log("Getting city weather info");
    get("https://weathering-with-me-g12.herokuapp.com/location/" + cityName).then((res) => {
      console.log(res);
      setCity(res);
    });
    console.log("Getting comments");
    get("https://weathering-with-me-g12.herokuapp.com/location/" + cityName + "/comments").then((res) => {
      console.log(res);
      setCommentlist(res);
    });
  }, [generalCtx.eventModified, cityName]);

  return (
    <div>
      LocationView, current cityName:{cityName}
      <br />
      cityName : {city?.name}
      <br />
      cityCountry : {city?.country}
      <br />
      cityLatitude : {city?.lat}
      <br />
      cityLongtitude : {city?.long}
      <br />
      <br />
      Comment section:
      {commentlist?.map((comment) => {
        return (
          <div>
            Author: {comment.author}
            <br />
            Comment: {comment.text}
          </div>
        );
      })}
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center" gap="5px">
        <TextField
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <SubmitButton onClick={addComment} loading={submitting} error={submitFailed}>
          Submit
        </SubmitButton>
      </Box>
    </div>
  );
}

export default LocationView;
