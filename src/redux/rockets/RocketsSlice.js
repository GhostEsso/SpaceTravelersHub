import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  status: true,
  error: null,
};

// je vais aller chercher les informations sur les fusées depuis internet
export const FetchData = createAsyncThunk('get/rockets', async () => {
  const rockets = await axios.get('https://api.spacexdata.com/v3/rockets');
  return rockets.data;
});

// Maintenant je crée un endroit pour ranger les informations sur les fusées
export const Rocket = createSlice({
  name: 'Rockets',
  initialState,
  extraReducers(builder) {
    builder
      // Quand je finis de chercher les infos sur les fusées et que tout va bien
      .addCase(FetchData.fulfilled, (state, { payload }) => {
        state.status = false; //  j'ai fini de chercher
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
