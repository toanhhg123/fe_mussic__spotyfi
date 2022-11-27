import { configureStore } from "@reduxjs/toolkit";
import mussic from "../src/features/mussic";
import mussicPlay from "../src/features/mussicPlay";
import authSlice from "../src/features/auth";
import playList from "../src/features/playList";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const playListPersistConfig = {
  key: "__playList",
  storage: storage,
};
export const store = configureStore({
  reducer: {
    mussic,
    mussicPlay,
    auth: authSlice,
    playList: persistReducer(playListPersistConfig, playList),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
