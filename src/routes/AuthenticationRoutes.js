import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import RecoveryPassword from "../pages/RecoveryPassword";
import ResetPassword from "../pages/ResetPassword";

export function AuthenticationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />}>
        <Route path="recovery-password" element={<RecoveryPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
    </Routes>
  );
}
