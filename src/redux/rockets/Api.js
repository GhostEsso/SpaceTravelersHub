import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const FetchData = createAsyncThunk(
  'get/rockets',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    if (state.rockets.rockets.length === 0) {
      const rockets = await axios.get('https://api.spacexdata.com/v4/rockets');
      const { data } = rockets;
      return data.map((rocket) => ({
        id: rocket.id,
        rocket_name: rocket.name,
        description: rocket.description,
        rocket_flickr_images: rocket.flickr_images[0],
      }));
    }

    return state.rockets.rockets;
  },
);

export default FetchData;
