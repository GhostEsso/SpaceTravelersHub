import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// I will fetch rocket information from the internet
export const FetchData = createAsyncThunk('get/rockets', async () => {
    const rockets = await axios.get('https://api.spacexdata.com/v3/rockets');
    const data = rockets.data;
    return data.map((rocket) => ({
        rocket_id: rocket.id,
        rocket_name: rocket.name,
        description: rocket.description,
        rocket_flickr_images: rocket.flickr_images[0],
    }));
})