import axios from "axios";

const axiosApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

axiosApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

axiosApi.defaults.headers.common["ngrok-skip-browser-warning"] = true;
axiosApi.defaults.withCredentials = true;
axiosApi.defaults.headers.post["Content-Type"] = "application/json";
axiosApi.defaults.headers.post["Accept"] = "application/json";
axiosApi.defaults.headers.get["Content-Type"] = "application/json";
axiosApi.defaults.headers.get["Accept"] = "application/json";

export default axiosApi;
