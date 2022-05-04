import React from "react";
import UserCard from "./UserCard";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import get from "../../../lib/get";
function AdminView() {
  const [users, setUsers] = useState([{}]);
  const [usersModified, setUsersModified] = useState(0);
  useEffect(() => {
    get(`${process.env.REACT_APP_BACKEND_BASE_URL}/user`).then((result) => {
      console.log(result);
      setUsers(result);
    });
  }, [usersModified]);
  return (
    <Container>
      {<UserCard name="hi" userId="hihi" />}
      {users.map((user) => {
        return <UserCard username={user.username} setUsersModified={setUsersModified} />;
      })}
    </Container>
  );
}

export default AdminView;
