// Import necessary dependencies
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// I will fetch rocket information from the internet
export const FetchData = createAsyncThunk('get/rockets', async () => {
  // Use Axios API to retrieve data from the provided URL
  const { data: rockets } = await axios.get('https://api.spacexdata.com/v3/rockets');
  // Transform the received data to match my desired structure
  return rockets.map((rocket) => ({
    id: rocket.id,
    rocket_name: rocket.name,
    description: rocket.description,
    rocket_flickr_images: rocket.flickr_images[0],
  }));
});

// Default export of the FetchData function
export default FetchData;
