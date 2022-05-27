import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

import authAPI from "../api/auth";
import cache from "../services/cache";

const KEY = "token";

export default function useAuth() {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  if (!token) {
    let tokenFromCache = cache.get(KEY);

    if (tokenFromCache) {
      let expireDate = moment.unix(tokenFromCache.exp).toDate();

      if (expireDate < Date.now()) cache.remove(KEY);
      else setToken(tokenFromCache);
    }
  } else cache.store(KEY, token);

  const handleLogin = async (email, password) => {
    await authAPI
      .signin(email, password)
      .then(result => {
        setToken(result.data);

        const origin = location.state?.from?.pathname || "/dashboard";
        navigate(origin);
      })
      .catch(result => console.log(result));
  };

  const handleLogout = () => {
    console.log("fez logout");
  };

  return {
    token: token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };
}
