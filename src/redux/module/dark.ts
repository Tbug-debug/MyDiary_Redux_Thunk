import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = true;

const lightDarks = createSlice({
  name: "toDosReducer",
  initialState,
  reducers: {
    move: (state, action: PayloadAction<boolean>) => action.payload,
  },
});

export const { move } = lightDarks.actions;

export default lightDarks;
