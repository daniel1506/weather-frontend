import React from "react";
import UserCard from "./UserCard";
import { Container, Typography, Divider } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import get from "../../../lib/get";
import CreateUser from "./CreateUser";
import { Filter } from "@mui/icons-material";
import GeneralContext from "../../../store/general-context";
import { LinearProgress } from "@mui/material";
function AdminView() {
  const [users, setUsers] = useState([{}]);
  const [usersModified, setUsersModified] = useState(0);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const generalCtx = useContext(GeneralContext);
  useEffect(() => {
    setIsLoadingUsers(true);
    get(`${process.env.REACT_APP_BACKEND_BASE_URL}/user`).then((result) => {
      console.log(result);
      setIsLoadingUsers(false);
      if (result.status != 200) {
      } else {
        setUsers(result);
      }
    });
  }, [usersModified]);
  let filteredUsers = users.filter((user) => {
    if (generalCtx.searchWord === "") return true;
    else {
      return user.username.includes(generalCtx.searchWord);
    }
  });
  return (
    <>
      <CreateUser setUsersModified={setUsersModified} />
      {!isLoadingUsers && (
        <Container>
          {filteredUsers.map((user) => {
            return <UserCard username={user.username} setUsersModified={setUsersModified} isAdmin={user.isAdmin} />;
          })}
        </Container>
      )}
      {isLoadingUsers && <LinearProgress />}
    </>
  );
}

export default AdminView;
