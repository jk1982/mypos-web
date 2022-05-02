import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";

import TopBar from "../../components/Dashboard/TopBar";
import LeftBar from "../../components/Dashboard/LeftBar";
import { Container } from "./styles";
import StatsPanel from "../../components/Dashboard/StatsPanel";
import EmployeesPanel from "../../components/Dashboard/EmployeesPanel";

const menuWidth = 240;

function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [period, setPeriod] = useState("hoje");

  const handleMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePeriodChange = event => {
    setPeriod(event.target.value);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <TopBar
        title="Barbearia do Benjamin"
        handleMenuToggle={handleMenuToggle}
        style={{
          width: { sm: `calc(100% - ${menuWidth}px)` },
          ml: { sm: `${menuWidth}px` },
        }}
      />
      <LeftBar
        minWidth={menuWidth}
        mobileOpen={mobileOpen}
        handleMenuToggle={handleMenuToggle}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${menuWidth}px)` },
          paddingLeft: 10,
        }}>
        <Toolbar />
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
      </Box>
    </Box>
  );
}

export default Dashboard;
