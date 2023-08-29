import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch Mission
export const getMission = createAsyncThunk('mission/getMission', async () => {
  const resp = await axios.get('https://api.spacexdata.com/v3/missions');
  console.log(resp);
});
