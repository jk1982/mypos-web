import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { AuthProvider, ProtectedRoute } from "../auth/AuthProvider";

const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const Login = React.lazy(() => import("../pages/Login"));
import NotFound from "../pages/NotFound";
const POS = React.lazy(() => import("../pages/POS"));

function AppRoutes() {
  return (
    <AuthProvider>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="POS"
            element={
              <ProtectedRoute>
                <POS />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default AppRoutes;
