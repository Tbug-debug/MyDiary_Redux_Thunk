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

export const __deleteDiary = createAsyncThunk(
  "diary/deleteDiary",
  async (id: number, thunkAPI) => {
    try {
      const data = await acuxios.delete(`list/${id}`);
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

const deleteDiary = createSlice({
  name: "myDiary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__deleteDiary.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(__deleteDiary.fulfilled, (state, action) => {
      state.isLoading = false;
      state.diary = action.payload;
    });
    builder.addCase(__deleteDiary.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as AxiosError;
    });
  },
});

export default deleteDiary;
