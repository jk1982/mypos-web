import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";

import TopBar from "../../components/TopBar";
import LeftBar from "../../components/LeftBar";

const menuWidth = 240;

function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <TopBar
        title="Barbearia do Benjamin"
        style={{
          width: { sm: `calc(100% - ${menuWidth}px)` },
          ml: { sm: `${menuWidth}px` },
        }}
      />
      <LeftBar minWidth={menuWidth} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${menuWidth}px)` },
        }}>
        <Toolbar />
        <Typography variant="h5">Dashboard</Typography>
      </Box>
    </Box>
  );
}

export default Dashboard;
