import { create } from "apisauce";

//TODO: criar uma blacklist e whitelist aqui

const apiClient = create({
  baseURL: "https://localhost:5001",
  timeout: 10000,
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    return response;
  }

  return response;
};

export default apiClient;
