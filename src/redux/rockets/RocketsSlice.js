import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  status: true,
  error: null,
};

// Now I create a place to store rocket information
export const Rocket = createSlice({
  name: 'Rockets',
  initialState,
  extraReducers(builder) {
    builder
      // When I'm done looking up the rocket info and it's alright
      .addCase(FetchData.fulfilled, (state, { payload }) => {
        state.status = false; //  searching finished
        
        state.rockets = data;
      });
  },
});
