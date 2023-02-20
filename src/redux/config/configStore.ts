import { configureStore } from "@reduxjs/toolkit";
import diary from "../module/diarylLst";
import dark from "../module/dark";
import deleteDiary from "../module/delete";
import postDiary from "../module/post";
import modifyDiary from "../module/modify";

const store = configureStore({
  reducer: {
    diarylist: diary.reducer,
    darklight: dark.reducer,
    darydelete: deleteDiary.reducer,
    diaryPost: postDiary.reducer,
    diaryModify: modifyDiary.reducer,
  },
});

export type RooteState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
