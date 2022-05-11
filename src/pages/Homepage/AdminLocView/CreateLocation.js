import { React, useState } from "react";
import SubmitButton from "../../../components/SubmitButton";
import HorizontalFlex from "../../../layoutLib/HorizontalFlex";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { TextField } from "@mui/material";
function CreateLocation(props) {
  const [failed, setFailed] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const create = () => {};
  return (
    <HorizontalFlex
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent={{ xs: "start" }}
      sx={{ padding: "10px", gap: "15px" }}
    >
      <SubmitButton
        variant="contained"
        error={failed}
        color="success"
        onClick={create}
        icon={<AddLocationAltIcon />}
        loading={loading}
      >
        CreateLocation
      </SubmitButton>
    </HorizontalFlex>
  );
}

export default CreateLocation;
