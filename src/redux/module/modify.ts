import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
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

export const __modifyDiary = createAsyncThunk(
  "diary/deleteDiary",
  async ({ modiform, id }: { modiform: Diary; id: number }, thunkAPI) => {
    try {
      const data = await acuxios.put(`list/${id}`, modiform);
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

const modifyDiary = createSlice({
  name: "myDiary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__modifyDiary.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__modifyDiary.fulfilled, (state, action) => {
      state.isLoading = false;
      state.diary = action.payload;
    });
    builder.addCase(__modifyDiary.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as AxiosError;
    });
  },
});

export default modifyDiary;
