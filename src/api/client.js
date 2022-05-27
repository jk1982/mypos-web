import { create } from "apisauce";

// import cache from "../utils/cache";

//TODO: criar uma blacklist e whitelist aqui

const apiClient = create({
  baseURL: "https://localhost:5001",
  timeout: 10000,
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    //cache.store(url, response.data);
    return response;
  }

  // const data = await cache.get(url);

  // return data ? { ok: true, data } : response;
  return response;
};

export default apiClient;
