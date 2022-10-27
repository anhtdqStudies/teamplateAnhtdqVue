import axios from "axios";
import { BASE_URL } from "../Constants";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      let token = localStorage.getItem("authorizedToken");
      if (token) {
        return new Promise(function (resolve, reject) {
          originalRequest.headers["Authorization"] = `Bearer ${token}`;
          resolve(axios(originalRequest));
        });
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
