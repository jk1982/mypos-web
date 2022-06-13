import React, { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthContext = React.createContext({});

const AuthProvider = ({ children }) => {
  const { token } = useAuth();
  // const [token] = useState(auth.token);
  // const [onLogin] = useState(() => auth.onLogin);
  // const [onLogout] = useState(() => auth.onLogout);

  return (
    <AuthContext.Provider value={[token]}>{children}</AuthContext.Provider>
  );
};

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) return <Navigate to="/" replace state={{ from: location }} />;

  return children;
};

const ProtectedOutlet = () => {
  const { token } = useAuth();

  if (!token) return <Navigate to="/" replace state={{ from: location }} />;

  return <Outlet />;
};

export { AuthContext, AuthProvider, ProtectedRoute, ProtectedOutlet };
