import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Employees from "../pages/Employees";
import EmployeesDetail from "../pages/Employees/Detail";
import EmployeesHome from "../pages/Employees/Home";
import Reports from "../pages/Reports";
import Sales from "../pages/Sales";
import Stock from "../pages/Stock";
import POS from "../pages/POS";

export function ApplicationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/" element={<Home />} index />
        <Route path="/employees" element={<Employees />}>
          <Route path="" element={<EmployeesHome />} />
          <Route path="employees-detail" element={<EmployeesDetail />} />
        </Route>
        <Route path="/sales" element={<Sales />}></Route>
        <Route path="/reports" element={<Reports />}></Route>
        <Route path="/stock" element={<Stock />}></Route>
      </Route>
      <Route path="/POS" element={<POS />}></Route>
    </Routes>
  );
}
