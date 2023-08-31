import { createAsyncThunk } from '@reduxjs/toolkit';

export const FetchData = createAsyncThunk(
  'get/rockets',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log(state);
    if (state.rockets.rockets.length === 0) {
      const rockets = await fetch('https://api.spacexdata.com/v4/rockets');
      const { data } = await rockets.json();
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
