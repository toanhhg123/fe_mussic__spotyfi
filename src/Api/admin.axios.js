import axiosApi from "./axios";

export const getAllUser = async () => {
  try {
    const { data } = await axiosApi.get("/auth/getAllUserAdmin");
    return data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};

export const createUser = async (body) => {
  try {
    const { data } = await axiosApi.post("/auth/create", body);
    return data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};

export const deleteUser = async (id) => {
  try {
    const { data } = await axiosApi.delete("/auth/delete/" + id);
    return data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};

export const addMussic = async ({ file, name, desc, subjects }) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("subjects", subjects);

    const { data } = await axiosApi.post("/file/uploadServer/", formData);
    return data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};

export const deleteMussic = async (_id) => {
  try {
    const { data } = await axiosApi.delete("/file/deleteFile/" + _id);
    return data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};
