import axios from "axios";
import { BASE_URL } from "./url";
import { authStore } from "../services/localStore";

const axiosApi = axios.create({
  baseURL: BASE_URL,
});

axiosApi.interceptors.request.use(
  (config) => {
    // Do something before request is sent

    const storeAuth = authStore.getStore();
    if (!storeAuth) return config;

    const { accessToken } = storeAuth;
    config.headers["Authorization"] = "bearer " + accessToken;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosApi;
