import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Change the base URL to match your API
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // You can centralize your error handling here (e.g., logging, custom error messages)
    return Promise.reject(error);
  }
);

export default axiosInstance;
