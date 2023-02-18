import { configureStore } from "@reduxjs/toolkit";
import diary from "../module/diarylLst";
import dark from "../module/dark";

const store = configureStore({
  reducer: {
    diarylist: diary.reducer,
    darklight: dark.reducer,
  },
});

export type RooteState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
