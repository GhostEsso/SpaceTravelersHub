import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  status: true,
  error: null,
};

// We are going to fetch data for rockets from the api
export const FetchData = createAsyncThunk('get/rockets', async () => {
  const rockets = await axios.get('https://api.spacexdata.com/v3/rockets');
  return rockets.data;
});

// Create a store in order to range fetched data
export const Rocket = createSlice({
  name: 'Rockets',
  initialState,
  extraReducers(builder) {
    builder
      // after fetching data, if it's okay
      .addCase(FetchData.fulfilled, (state, { payload }) => {
        state.status = false; //searching is ok 
        const data = payload.map((rocket) => ({
          rocket_id: rocket.id,
          rocket_name: rocket.name,
          description: rocket.description,
          rocket_flickr_images: rocket.flickr_images[0],
        }));
        state.rockets = data;
      });
  },
});
