import React from "react";
import { useNavigate } from "react-router-dom";

import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";

import { Container } from "./styles";

import EmployeesPanel from "../../../components/Home/EmployeesPanel";

function EmployeesHome() {
  const navigate = useNavigate();

  const handleAddEmployee = () => {
    navigate("/employees/employees-detail");
  };

  return (
    <>
      <EmployeesPanel />
      <Container style={{ justifyContent: "flex-end", marginTop: 10 }}>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => handleAddEmployee()}>
          <Add />
        </Fab>
      </Container>
    </>
  );
}

export default EmployeesHome;
