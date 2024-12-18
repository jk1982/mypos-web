import React from "react";

import { Avatar, Badge, Box, Drawer, Fab, IconButton } from "@mui/material";
import { Edit, PhotoCamera } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

import MainMenu from "../MainMenu";

const Input = styled("input")({
  display: "none",
  width: 0,
  height: 0,
});

function LeftBar({ minWidth, handleMenuToggle, mobileOpen }) {
  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: minWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleMenuToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: minWidth },
          "& .MuiDrawer-paper": { borderWidth: 0 },
        }}>
        {<MainMenu />}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: minWidth },
          "& .MuiDrawer-paper": { borderWidth: 0 },
        }}
        open>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <IconButton alt="Editar Logo" size="small">
              <label
                htmlFor="icon-button-file"
                style={{ margin: 0, padding: 0 }}>
                <Input accept="image/*" id="icon-button-file" type="file" />
                <Edit />
              </label>
            </IconButton>
          }
          sx={{ marginRight: -1 }}>
          <Avatar
            src={require("../../../assets/logo.jpg")}
            alt="Logo Lojista"
            variant="square"
            sx={{
              minWidth: minWidth - 2,
              minHeight: 140,
            }}>
            <Fab>
              <label htmlFor="icon-button-file" style={{ paddingTop: 6 }}>
                <Input accept="image/*" id="icon-button-file" type="file" />
                <PhotoCamera color="primary" />
              </label>
            </Fab>
          </Avatar>
        </Badge>
        {<MainMenu />}
      </Drawer>
    </Box>
  );
}

export default LeftBar;
