//@ts-check
import { React, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ShortText from "../../../components/ShortText";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import BlockIcon from "@mui/icons-material/Block";
import LockResetIcon from "@mui/icons-material/LockReset";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Card from "@mui/material/Card";
import SubmitButton from "../../../components/SubmitButton";
import { TextField, Box } from "@mui/material";
import put from "../../../lib/put";
import deleteReq from "../../../lib/delete";
import PasswordInput from "../../../components/PasswordInput";
import Grow from "@mui/material/Grow";
import NameInput from "../../../components/NameInput";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
function UserCard(props) {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [resetting, setResetting] = useState(false);
  const [error, setError] = useState(undefined);
  const [banning, setBanning] = useState(false);
  const [banError, setBanError] = useState(undefined);
  const clearProgress = () => {
    setResetting(null);
    setError(null);
  };
  const reset = () => {
    //sending request to reset user password and username
    const data = { username: newUsername, password: newPassword };
    console.log(data);
    setResetting(true);
    put(`${process.env.REACT_APP_BACKEND_BASE_URL}/user/${props.username}`, data)
      .then((result) => {
        console.log(result);
        if (result.status != 200) setError(true);
        else {
          setError(false);
          props.setUsersModified((prev) => {
            return prev + 1;
          });
        }
        setResetting(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const ban = () => {
    //sending request to ban user
    setBanning(true);
    console.log(`${process.env.REACT_APP_BACKEND_BASE_URL}/user/${props.username}`);
    deleteReq(`${process.env.REACT_APP_BACKEND_BASE_URL}/user/${props.username}`)
      .then((result) => {
        console.log(result);
        if (result.status != 200) setBanError(true);
        else {
          setBanError(false);
          props.setUsersModified((prev) => {
            return prev + 1;
          });
        }
        setBanning(false);
      })
      .catch((err) => {
        console.log("炒咗");
        console.log(err);
      });
  };
  return (
    <Grow in={true} timeout={500}>
      <Card sx={{ marginBottom: 2 }}>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText
              primary={
                <Grid
                  container
                  direction={{ xs: "row" }}
                  alignItems="center"
                  justifyContent={{ xs: "space-between" }}
                  gap={{ sm: 2, xs: 0 }}
                >
                  <Grid item>
                    <Grid
                      container
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      justifyContent={{ xs: "start" }}
                      gap={{ sm: 2, xs: 0 }}
                    >
                      {!props.isAdmin && <AccountCircleIcon />}
                      {props.isAdmin && <AdminPanelSettingsIcon color={"error"} />}
                      <ShortText>{props.username}</ShortText>
                      {props.userId !== undefined && <ShortText color="primary">{`#${props.userId}`}</ShortText>}
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      direction={{ xs: "column", md: "row" }}
                      alignItems={{ xs: "end", md: "center" }}
                      justifyContent={{ xs: "end" }}
                      gap={{ sm: 2, xs: 1 }}
                    >
                      <NameInput
                        noHelperText
                        label="new username"
                        setUsername={setNewUsername}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      />
                      <PasswordInput
                        noHelperText
                        label="new password"
                        setPassword={setNewPassword}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "row" },
                          alignItems: "center",
                        }}
                      >
                        <SubmitButton
                          variant="contained"
                          error={error}
                          color="warning"
                          onClick={(e) => {
                            e.stopPropagation();
                            clearProgress();
                            reset();
                          }}
                          icon={<LockResetIcon />}
                          loading={resetting}
                        >
                          update Info
                        </SubmitButton>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "row" },
                          alignItems: "center",
                        }}
                      >
                        <SubmitButton
                          variant="contained"
                          error={banError}
                          loading={banning}
                          color="error"
                          onClick={(e) => {
                            e.stopPropagation();
                            ban();
                          }}
                          icon={<BlockIcon />}
                        >
                          Ban
                        </SubmitButton>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              }
            />
          </ListItemButton>
        </ListItem>
      </Card>
    </Grow>
  );
}

export default UserCard;
