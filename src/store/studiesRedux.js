import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// url to get mock_data
const URL = 'http://localhost:3000/mock_data/list.json';

export const getList = createAsyncThunk('studies/getList', async () => {
  const response = await axios.get(URL);
  return response.data;
});

const initialState = { list: [], status: null };

const studiesSlice = createSlice({
  name: 'studies',
  initialState,
  extraReducers: {
    [getList.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getList.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = 'success';
    },
    [getList.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default studiesSlice.reducer;
