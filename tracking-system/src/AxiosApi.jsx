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

// axiosApi.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     console.log("erroeeee", error);
//     try {
//       if (error.response.status === 401) {
//         localStorage.removeItem("token");
//         if (window.location.pathname !== "/") {
//           window.location.href = "/";
//         }
//       } else {
//         return Promise.reject(error);
//       }
//     } catch (error) {
//       console.error(error);
//     }

//     throw error;
//   }
// );
export default axiosApi;
