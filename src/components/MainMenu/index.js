import React from "react";
import { Button, ListItemText, Divider, ListItemIcon } from "@mui/material";
import {
  BarChart,
  GridOn,
  Group,
  HelpOutline,
  MenuBookOutlined,
  PrintRounded,
  Savings,
  Settings,
} from "@mui/icons-material";

import {
  AppMenu,
  BottomButtons,
  Container,
  CustomListItemButton,
} from "./styles";

const Item = ({ title, subTitle, icon, selected }) => {
  return (
    <CustomListItemButton selected={selected}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} secondary={subTitle} />
    </CustomListItemButton>
  );
};

function MainMenu() {
  return (
    <Container>
      <AppMenu>
        <Item title="Dashboard" icon={<BarChart />} selected />
        <Item title="Faturamento" icon={<Savings />} />
        <Item title="Colaboradores" icon={<Group />} />
        <Item title="Relatórios" icon={<PrintRounded />} />
        <Item title="Estoque" icon={<GridOn />} />
      </AppMenu>
      <AppMenu bottomMenu={true}>
        <Item title="Configurações" icon={<Settings />} />
        <Divider light variant="middle" />
        <Item title="Manual" icon={<MenuBookOutlined />} />
        <Divider light variant="middle" />
        <Item title="Suporte ao Usuário" icon={<HelpOutline />} />
        <Divider />
        <BottomButtons>
          <Button variant="outlined" disableElevation size="small">
            Contrato
          </Button>
        </BottomButtons>
      </AppMenu>
    </Container>
  );
}

export default MainMenu;
