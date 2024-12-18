import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";

import TopBar from "../../components/Dashboard/TopBar";
import LeftBar from "../../components/Dashboard/LeftBar";

const menuWidth = 240;

function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuToggle = () => {
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
          paddingLeft: 10,
        }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Dashboard;
