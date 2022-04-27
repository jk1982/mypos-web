import React from "react";

import { AppBar, Box, IconButton, Typography, Toolbar } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import TopAvatarMenu from "../TopAvatarMenu";
import colors from "../../config/colors";

function TopBar({ title, style, handleMenuToggle }) {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        ...style,
        "& .MuiToolbar-root": {
          borderBottom: "1px dashed rgba(193, 193, 193, 0.4)",
        },
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
