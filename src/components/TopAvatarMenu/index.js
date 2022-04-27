import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";

import { Logout, Settings } from "@mui/icons-material";

function TopAvatarMenu() {
  const [anchorAvatar, setAnchorAvatar] = useState(null);
  const open = Boolean(anchorAvatar);

  const handleClickAvatar = event => {
    setAnchorAvatar(event.currentTarget);
  };

  const handleCloseAvatar = () => {
    setAnchorAvatar(null);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}>
        <Tooltip title="Sua Conta">
          <IconButton
            onClick={handleClickAvatar}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}>
            <Avatar src={require("../../assets/avatar.jpg")} alt="Perfil" />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorAvatar}
        id="account-menu"
        open={open}
        onClose={handleCloseAvatar}
        onClick={handleCloseAvatar}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
        <MenuItem>
          <Avatar /> Perfil
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Configurações
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Sair
        </MenuItem>
      </Menu>
    </>
  );
}

export default TopAvatarMenu;
