import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { acuxios } from "../../util/axiosbase";

interface Diary {
  title: string;
  date: string;
  body: string;
  id: number;
}

interface DiaryState {
  diary: Diary[];
  isLoading: boolean;
  error: AxiosError | null;
}

export const __getDiary = createAsyncThunk(
  "diary/getDiary",
  async (_, thunkAPI) => {
    try {
      const data = await acuxios.get("/list");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState: DiaryState = {
  diary: [],
  isLoading: false,
  error: null,
};

const diary = createSlice({
  name: "myDiary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getDiary.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__getDiary.fulfilled, (state, action) => {
      state.isLoading = false;
      state.diary = action.payload;
    });
    builder.addCase(__getDiary.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as AxiosError;
    });
  },
});

export default diary;
