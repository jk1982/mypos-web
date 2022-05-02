import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import RecoveryPassword from "../pages/RecoveryPassword";
import ResetPassword from "../pages/ResetPassword";

export const paths = [
  {
    name: "/",
    component: <Login />,
    index: true,
  },
  {
    name: "recoverypassword",
    component: <RecoveryPassword />,
  },
  {
    name: "resetpassword",
    component: <ResetPassword />,
  },
];

export function AuthenticationRoutes() {
  return (
    <Routes>
      {paths.map(item => {
        return (
          <Route
            key={item.name}
            path={item.name}
            element={item.component}
            index={item.index}
          />
        );
      })}
    </Routes>
  );
}
