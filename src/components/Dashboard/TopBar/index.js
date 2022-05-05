import React from "react";
import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Toolbar,
  Button,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import TopAvatarMenu from "../TopAvatarMenu";
import colors from "../../../config/colors";

function TopBar({ title, style, handleMenuToggle }) {
  const navigate = useNavigate();

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
          <Button
            variant="contained"
            disableElevation
            size="medium"
            color="warning"
            onClick={() => navigate("/POS")}>
            Abrir POS
          </Button>
          <TopAvatarMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
