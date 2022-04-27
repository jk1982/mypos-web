import React from "react";
import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import { MailOutline } from "@mui/icons-material";

function MainMenu() {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItemButton>
          <ListItemIcon>
            <MailOutline />
          </ListItemIcon>
          <ListItemText primary="Teste" />
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton>
          <ListItemIcon>
            <MailOutline />
          </ListItemIcon>
          <ListItemText primary="Teste 2" />
        </ListItemButton>
      </List>
    </div>
  );
}

export default MainMenu;
