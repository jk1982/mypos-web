import React, { useState } from "react";
import moment from "moment";

import AuthContext from "../auth/context";
import cache from "../utils/cache";

import { ApplicationRoutes } from "./ApplicationRoutes";
import { AuthenticationRoutes } from "./AuthenticationRoutes";

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
      {!user ? <ApplicationRoutes /> : <AuthenticationRoutes />}
    </AuthContext.Provider>
  );
}

export default AppRoutes;
