import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi } from "../../Api/auth.axios";
import { authStore } from "../../services/localStore";

const auth = authStore.getStore();

const initialState = {
  isLoading: false,
  isLogin: auth && true,
  error: "",
  data: {
    accessToken: auth?.accessToken || "",
    refreshToken: auth?.refreshToken || "",
    userInfo: auth?.payload || {},
  },
};

const refreshState = {
  isLoading: false,
  isLogin: false,
  error: "",
  data: {
    accessToken: "",
    refreshToken: "",
    userInfo: {},
  },
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    sendRequest: (state) => {
      state.isLoading = true;
    },
    requestSuccess: (state, { payload }) => {
      state.isLogin = true;
      state.data = payload;
      authStore.setStore({
        accessToken: state.data.accessToken,
        refreshToken: state.data.refreshToken,
        payload: state.data.userInfo,
      });
    },
    requestFail: (state, { payload }) => {
      state.error = payload;
    },
    logOut: () => {
      authStore.removeStore();
      return refreshState;
    },
    resetState: (state) => {
      return refreshState;
    },
  },
});

export const loginReducer = createAsyncThunk(
  "loginThunk",
  async ({ email, password }, { dispatch }) => {
    try {
      dispatch(sendRequest());
      const data = await loginApi({ email, password });
      dispatch(resetState());

      return dispatch(requestSuccess(data));
    } catch (error) {
      dispatch(resetState());

      dispatch(requestFail(error.message));
    }
  }
);

export const { sendRequest, requestSuccess, requestFail, resetState, logOut } =
  authSlice.actions;

export default authSlice.reducer;
