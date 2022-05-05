import React from "react";
import UserCard from "./UserCard";
import { Container, Typography, Divider } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import get from "../../../lib/get";
import CreateUser from "./CreateUser";
import { Filter } from "@mui/icons-material";
import GeneralContext from "../../../store/general-context";
function AdminView() {
  const [users, setUsers] = useState([{}]);
  const [usersModified, setUsersModified] = useState(0);
  const generalCtx = useContext(GeneralContext);
  useEffect(() => {
    get(`${process.env.REACT_APP_BACKEND_BASE_URL}/user`).then((result) => {
      console.log(result);
      setUsers(result);
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
      <Container>
        {<UserCard name="hi" userId="hihi" />}
        {filteredUsers.map((user) => {
          return <UserCard username={user.username} setUsersModified={setUsersModified} isAdmin={user.isAdmin} />;
        })}
      </Container>
    </>
  );
}

export default AdminView;
