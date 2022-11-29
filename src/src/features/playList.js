import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playLists: [{ name: "Root", musics: [] }],
};

const playListSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addPlayList: (state, action) => {
      if (!state.playLists.find((x) => x.name === action.payload))
        state.playLists.push({ name: action.payload, musics: [] });
    },
    addMussicPlaylist: (state, { payload }) => {
      const index = state.playLists.findIndex((x) => x.name === payload.name);
      if (index > -1) state.playLists[index].musics.unshift(payload.mussic);
    },
  },
});

export const { addPlayList, addMussicPlaylist } = playListSlice.actions;

export default playListSlice.reducer;
