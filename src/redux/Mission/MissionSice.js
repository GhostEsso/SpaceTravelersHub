import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch Mission
export const getMissions = createAsyncThunk('mission/getMission', async () => {
  const resp = await axios.get('https://api.spacexdata.com/v3/missions');
  return resp.data;
});

const initialState = {
  missionData: [],
  isLoading: true, // Indicator to track if the search is in progress
  error: null, // Store any errors
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    add: (state, action) => {
      state.missionData.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }))
      .addCase(getMissions.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        missionData: action.payload,
      }))
      .addCase(getMissions.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message,
      }));
  },
});

// export const { add } = missionSlice.actions;
export default missionSlice.reducer;
