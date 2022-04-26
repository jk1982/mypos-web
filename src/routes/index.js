import React, { useState } from "react";
import moment from "moment";
import { Route, Routes } from "react-router-dom";

import AuthContext from "../auth/context";
import cache from "../utils/cache";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/Login";
import RecoveryPassword from "../pages/RecoveryPassword";
import ResetPassword from "../pages/ResetPassword";

function AppRoutes() {
  const [user, setUser] = useState();

  if (!user) {
    let userCache = cache.get(cache.keys.currentUser);

    if (userCache) {
      let expireDate = moment.unix(userCache.exp).toDate();

      if (expireDate < Date.now()) cache.remove(cache.keys.currentUser);
      else setUser(userCache);
    }
  } else cache.store(cache.keys.currentUser, user);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {!user ? (
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route index path="/" element={<LoginPage />}></Route>
          <Route path="recoverypassword" element={<RecoveryPassword />}></Route>
          <Route path="resetpassword" element={<ResetPassword />}></Route>
        </Routes>
      )}
    </AuthContext.Provider>
  );
}

export default AppRoutes;
