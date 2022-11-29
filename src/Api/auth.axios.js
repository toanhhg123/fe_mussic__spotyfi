import axiosApi from "./axios";

export const loginApi = async ({ email, password }) => {
  try {
    const { data } = await axiosApi.post("/auth/login", { email, password });
    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message || error.message);
  }
};

export const register = async (body) => {
  try {
    const { data } = await axiosApi.post("/auth/register", body);
    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
    throw new Error(error?.response?.data?.message || error.message);
  }
};
