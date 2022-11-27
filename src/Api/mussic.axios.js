import axiosApi from "./axios";

export const getAllMussic = async ({ pageIndex }) => {
  try {
    const { data } = await axiosApi.get("/file/getAllFilePublicServer", {
      params: {
        pageIndex,
        type: "mp3",
      },
    });
    return data;
  } catch (error) {
    throw new Error({ message: error.message });
  }
};
