import React from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import {
  BarChart,
  GridOn,
  Group,
  PrintRounded,
  Savings,
} from "@mui/icons-material";

const Item = ({ title, icon }) => {
  return (
    <ListItemButton>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText
        primary={title}
        sx={{ "& .MuiTypography-root": { fontFamily: "Quicksand" } }}
      />
    </ListItemButton>
  );
};

function MainMenu() {
  return (
    <div>
      <Toolbar />
      <List>
        <Item title="Dashboard" icon={<BarChart />} />
        <Item title="Faturamento" icon={<Savings />} />
        <Item title="Colaboradores" icon={<Group />} />
        <Item title="Relatórios" icon={<PrintRounded />} />
        <Item title="Estoque" icon={<GridOn />} />
      </List>
    </div>
  );
}

export default MainMenu;
