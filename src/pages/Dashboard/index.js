import React, { useState } from "react";
import { Box, Toolbar, Typography } from "@mui/material";

import TopBar from "../../components/TopBar";
import LeftBar from "../../components/LeftBar";

const menuWidth = 240;

function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuToggle = () => {
    console.log("entrou");
    setMobileOpen(!mobileOpen);
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
        }}>
        <Toolbar />
        <Typography variant="h5">Dashboard</Typography>
      </Box>
    </Box>
  );
}

export default Dashboard;
