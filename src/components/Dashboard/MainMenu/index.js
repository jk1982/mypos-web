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

import { dashboardPaths } from "../../../routes/ApplicationRoutes";

const Item = ({ title, subTitle, icon, path }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <CustomListItemButton
      onClick={() => navigate(path)}
      selected={location.pathname === path}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} secondary={subTitle} />
    </CustomListItemButton>
  );
};

function MainMenu() {
  let paths = dashboardPaths;

  return (
    <Container>
      <AppMenu>
        {paths.map(item => {
          return (
            <Item
              key={item.path}
              title={item.name}
              icon={item.icon}
              path={item.path}
            />
          );
        })}
        {/* <Item title="Dashboard" icon={<BarChart />} path="/" />
        <Item title="Colaboradores" icon={<Group />} path="employees" />
        <Item title="Faturamento" icon={<Savings />} />
        <Item title="Relatórios" icon={<PrintRounded />} />
        <Item title="Estoque" icon={<GridOn />} /> */}
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
