import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import StatsPanel from "../../components/Home/StatsPanel";
import EmployeesPanel from "../../components/Home/EmployeesPanel";

import { Container } from "./styles";

function Home() {
  const [period, setPeriod] = useState("hoje");

  const handlePeriodChange = event => {
    setPeriod(event.target.value);
  };

  return (
    <>
      <Container style={{ marginBottom: 20 }}>
        <Typography variant="h4">Dashboard</Typography>
        <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel id="period-select">Período</InputLabel>
          <Select
            id="period-select"
            labelId="period-select"
            value={period}
            label="Período"
            onChange={handlePeriodChange}>
            <MenuItem value="hoje">Hoje</MenuItem>
            <MenuItem value="semana">Semana</MenuItem>
            <MenuItem value="mes">Mês</MenuItem>
          </Select>
        </FormControl>
      </Container>
      <StatsPanel />
      <EmployeesPanel />
    </>
  );
}

export default Home;
