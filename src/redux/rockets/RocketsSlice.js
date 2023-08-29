import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  status: true,
  error: null,
};

// I will fetch rocket information from the internet
export const FetchData = createAsyncThunk('get/rockets', async () => {
  const rockets = await axios.get('https://api.spacexdata.com/v3/rockets');
  return rockets.data;
});

// Now I create a place to store rocket information
export const Rocket = createSlice({
  name: 'Rockets',
  initialState,
  extraReducers(builder) {
    builder
      // When I'm done looking up the rocket info and it's alright
      .addCase(FetchData.fulfilled, (state, { payload }) => {
        state.status = false; //  searching finished
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
