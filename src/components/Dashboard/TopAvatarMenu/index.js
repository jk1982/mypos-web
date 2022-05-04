import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  MenuItem,
  Tooltip,
} from "@mui/material";

import { Logout, Settings, Store } from "@mui/icons-material";

import { AvatarContextMenu } from "./styles";

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
            <Avatar src={require("../../../assets/avatar.jpg")} alt="Perfil" />
          </IconButton>
        </Tooltip>
      </Box>
      <AvatarContextMenu
        anchorEl={anchorAvatar}
        id="account-menu"
        open={open}
        onClose={handleCloseAvatar}
        onClick={handleCloseAvatar}>
        <MenuItem>
          <Avatar /> Perfil
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Store fontSize="small" />
          </ListItemIcon>
          Minha Loja
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
      </AvatarContextMenu>
    </>
  );
}

export default TopAvatarMenu;
