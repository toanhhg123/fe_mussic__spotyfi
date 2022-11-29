import axiosApi from "./axios";

export const getAllMussic = async (params) => {
  try {
    const { data } = await axiosApi.get("/file/getAllFilePublicServer", {
      params: {
        ...params,
        type: "mp3",
      },
    });
    return data;
  } catch (error) {
    throw new Error({ message: error.message });
  }
};
