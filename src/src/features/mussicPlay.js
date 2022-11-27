import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  playing: false,
};

const mussicPlaySlice = createSlice({
  name: "mussicPlay",
  initialState,
  reducers: {
    choiceMusic: (state, action) => {
      state.data = action.payload;
    },
    toglePlay: (state) => {
      if (state.data) state.playing = !state.playing;
    },
    resetState: (state) => {
      return initialState;
    },
  },
});

export const { sendRequest, choiceMusic, toglePlay } = mussicPlaySlice.actions;

export default mussicPlaySlice.reducer;
