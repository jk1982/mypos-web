import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
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

const Item = ({ title, subTitle, path, icon }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <CustomListItemButton
      onClick={() => navigate(path)}
      selected={
        location.pathname === path || location.pathname.indexOf(path) > 0
      }>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} secondary={subTitle} />
    </CustomListItemButton>
  );
};

function MainMenu() {
  return (
    <Container>
      <AppMenu>
        <Item title="Dashboard" path="/" icon={<BarChart />} />
        <Item title="Colaboradores" icon={<Group />} path="employees" />
        <Item title="Faturamento" icon={<Savings />} path="sales" />
        <Item title="Relatórios" icon={<PrintRounded />} path="reports" />
        <Item title="Estoque" icon={<GridOn />} path="stock" />
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
