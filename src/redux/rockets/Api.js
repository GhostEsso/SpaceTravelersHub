import { createAsyncThunk } from '@reduxjs/toolkit';

export const FetchData = createAsyncThunk(
  'get/rockets',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    if (state.rockets.rockets.length === 0) {
      try {
        const response = await fetch('https://api.spacexdata.com/v4/rockets');
        const data = await response.json();
        return data.map((rocket) => ({
          id: rocket.id,
          rocket_name: rocket.name,
          description: rocket.description,
          rocket_flickr_images: rocket.flickr_images[0],
        }));
      } catch (error) {
        return thunkAPI.rejectWithValue('Erreur lors du chargement des rockets');
      }
    }

    return state.rockets.rockets;
  },
);

export default FetchData;
