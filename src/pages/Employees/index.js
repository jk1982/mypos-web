import React from "react";
import { Outlet } from "react-router-dom";

import { Typography } from "@mui/material";

import { Container } from "./styles";

function Employees() {
  return (
    <>
      <Container style={{ marginBottom: 20 }}>
        <Typography variant="h4">Colaboradores</Typography>
      </Container>
      <Outlet />
    </>
  );
}

export default Employees;
