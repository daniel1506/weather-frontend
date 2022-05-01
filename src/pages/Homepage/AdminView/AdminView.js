import React from "react";
import UserCard from "./UserCard";
import { Container } from "@mui/material";
function AdminView() {
  return (
    <Container>
      <UserCard name="hi" userId="hihi" />
    </Container>
  );
}

export default AdminView;
