import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const FetchData = createAsyncThunk('get/rockets', async () => {
  const rockets = await axios.get('https://api.spacexdata.com/v4/rockets');
  const { data } = rockets;
  return data.map((rocket) => ({
    id: rocket.id,
    rocket_name: rocket.name,
    description: rocket.description,
    rocket_flickr_images: rocket.flickr_images[0],
  }));
});

export default FetchData;
