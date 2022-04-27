import React, { useState } from "react";

import { AppBar, Box, IconButton, Typography, Toolbar } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import TopAvatarMenu from "../TopAvatarMenu";
import colors from "../../config/colors";

function TopBar({ title, style }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        ...style,
      }}>
      <Toolbar
        sx={{
          backgroundColor: colors.background,
          color: colors.dark,
        }}>
        <IconButton
          color="inherit"
          aria-label="abrir menu"
          edge="start"
          onClick={handleMenuToggle}
          sx={{ mr: 2, display: { sm: "none" } }}>
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
          }}>
          <Typography
            variant="h6"
            noWrap
            sx={{ flex: 1, alignSelf: "flex-start", color: "#5E6366" }}>
            Dashboard
          </Typography>
          <Typography noWrap sx={{ flex: 2 }}>
            {title}
          </Typography>
          <TopAvatarMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
