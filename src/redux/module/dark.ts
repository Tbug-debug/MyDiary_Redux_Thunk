import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LightDark {
  lightdark: boolean;
}

const initialState: LightDark = {
  lightdark: true,
};

const lightDarks = createSlice({
  name: "toDosReducer",
  initialState,
  reducers: {
    move: (state, action: PayloadAction<boolean>) => {
      state.lightdark = action.payload;
    },
  },
});

export const { move } = lightDarks.actions;

export default lightDarks;
