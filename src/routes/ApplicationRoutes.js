import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  BarChart,
  GridOn,
  Group,
  PrintRounded,
  Savings,
} from "@mui/icons-material";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Employees from "../pages/Employees";

export const dashboardPaths = [
  {
    name: "Dashboard",
    path: "/",
    icon: <BarChart />,
    component: <Home />,
    index: true,
  },
  {
    name: "Colaboradores",
    path: "/employees",
    icon: <Group />,
    component: <Employees />,
  },
  {
    name: "Faturamento",
    path: "/sales",
    icon: <Savings />,
    component: null,
  },
  {
    name: "Relatórios",
    path: "/reports",
    icon: <PrintRounded />,
    component: null,
  },
  {
    name: "Estoque",
    path: "/stock",
    icon: <GridOn />,
    component: null,
  },
];

export function ApplicationRoutes() {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        {dashboardPaths.map(item => {
          return (
            <Route
              key={item.name}
              path={item.path}
              element={item.component}
              index={item.index}
            />
          );
        })}
      </Route>
    </Routes>
  );
}
