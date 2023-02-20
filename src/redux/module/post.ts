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

export const __postDiary = createAsyncThunk(
  "diary/deleteDiary",
  async (form: Diary, thunkAPI) => {
    try {
      const data = await acuxios.post(`list`, form);
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

const postDiary = createSlice({
  name: "myDiary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__postDiary.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__postDiary.fulfilled, (state, action) => {
      state.isLoading = false;
      state.diary = action.payload;
    });
    builder.addCase(__postDiary.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as AxiosError;
    });
  },
});

export default postDiary;
