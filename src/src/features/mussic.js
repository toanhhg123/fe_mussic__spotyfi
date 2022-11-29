import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteMussic } from "../../Api/admin.axios";
import { getAllMussic } from "../../Api/mussic.axios";

const initialState = {
  isLoading: false,
  error: "",
  data: {
    files: [],
    totalItem: 0,
    pageIndex: 0,
    pageSize: 0,
    pages: 0,
    keyword: "",
  },
};

const mussicSlice = createSlice({
  name: "mussic",
  initialState,
  reducers: {
    sendRequest: (state) => {
      state.isLoading = true;
    },
    requestSuccess: (state, { payload }) => {
      state.data = payload;
    },
    deleteSuccess: (state, { payload }) => {
      state.data.files = state.data.files.filter((x) => x._id !== payload);
    },
    requestFail: (state, { payload }) => {
      state.error = payload;
    },
    resetState: (state) => {
      return initialState;
    },
  },
});

export const getAllMussicReduce = createAsyncThunk(
  "getMussicsThunk",
  async (params, { dispatch }) => {
    try {
      dispatch(sendRequest());
      const data = await getAllMussic(params);
      dispatch(resetState());
      return dispatch(requestSuccess(data));
    } catch (error) {
      dispatch(requestFail(error.message));
    }
  }
);

export const deleteMussicReduce = createAsyncThunk(
  "deleteMussicsThunk",
  async (params, { dispatch }) => {
    try {
      dispatch(sendRequest());
      const data = await deleteMussic(params);

      console.log({ data });
      return dispatch(deleteSuccess(data._id));
    } catch (error) {
      dispatch(requestFail(error.message));
    }
  }
);

export const {
  sendRequest,
  requestSuccess,
  requestFail,
  resetState,
  deleteSuccess,
} = mussicSlice.actions;

export default mussicSlice.reducer;
